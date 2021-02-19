const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Measurement } = require("../../db/models");

//Get all of the measurements from the measurements table
router.get('/', asyncHandler(async(req, res) => {
    const measurements = await Measurement.findAll();
    res.json(
        measurements
    )
}));

module.exports = router;
