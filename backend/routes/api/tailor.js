const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res,next).catch(next);
const {TailorMade, Pattern, Fabric, User} = require("../../db/models");

router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.body.userId);

    const patterns = await Pattern.findAll({
        where: {
            id: req.params.id
        }
    })
    const fabrics = await Fabric.findAll({
        where: {
            id: req.params.id
        }
    })

    const tailorItem = await TailorMade.create({
        product: patterns.patternType,
        measurements: user.measurementId,
        price: patterns.price + fabrics.price
    })

    res.json({
        tailorItem
    })
}))

module.exports = router;
