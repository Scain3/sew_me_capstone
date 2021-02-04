const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Patterns } = require("../../db/models");

router.get('/', asyncHandler(async(req, res) => {
    const allPatterns = await Patterns.findAll();
    res.json({
        product: allPatterns
    })
}));
