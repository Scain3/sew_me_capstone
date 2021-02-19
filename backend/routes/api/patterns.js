const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Pattern } = require("../../db/models");


//Get all of the patterns from the patterns table
router.get('/', asyncHandler(async(req, res) => {
    const allPatterns = await Pattern.findAll();
    res.json({
        allPatterns
    })
}));

//Get a single pattern that matches the id
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const eachPattern = await Pattern.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json({
        eachPattern
    })
}))



module.exports = router;
