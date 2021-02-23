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

//Add your measurements
router.post('/add-measurements', asyncHandler(async(req, res, next) => {

    const measurements = await Measurements.create({
        chest: req.body.chest,
        shoulders: req.body.shoulders,
        sleeves: req.body.sleeves,
        biceps: req.body.biceps,
        wrist: req.body.wrist,
        waist: req.body.waist,
        jacketLength: req.body.jacketLength,
        height: req.body.height,
        hip: req.body.hip,
        thighCircumference: req.body.thighCircumference,
        kneeCircumference: req.body.kneeCircumference,
        waistToAnkle: req.body.waistToAnkle,
        ankleToKnee: req.body.ankleToKnee,
        kneeToThigh: req.body.kneeToThigh,
        frontRise: req.body.frontRise,
        backRise: req.body.backRise,
    })
    res.json({
        measurements
    })
}))

module.exports = router;
