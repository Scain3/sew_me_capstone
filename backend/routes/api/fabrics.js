const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Fabric } = require("../../db/models");

//Get all of the fabrics from the fabrics table
router.get('/', asyncHandler(async(req, res) => {
    const allFabrics = await Fabric.findAll();
    res.json({
        allFabrics
    })
}));

//Get a single fabric pattern that matches the id
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const eachFabric = await Fabric.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        eachFabric
    })
}))


module.exports = router;
