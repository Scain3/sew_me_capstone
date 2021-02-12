const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res,next).catch(next);
const {TailorMade, Pattern, Fabric, User} = require("../../db/models");


router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.body.userId);

    const pattern = await Pattern.findByPk(req.params.id);

    const tailorItem = await TailorMade.create({
        buyerId: user.id,
        patternId: pattern.id,
        clothing: pattern.patternType,
        patternImage: pattern.image1,
        price: pattern.price
    })

    res.json({
        tailorItem
    })
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const tailor = await TailorMade.findByPk(req.params.id);
    await tailor.destroy();
    res.json({
        message: 'Success!'
    })
}))

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
    const fabric = await Fabric.findByPk(req.body.fabricId);
    const tailorMade = await TailorMade.findByPk(req.params.id);

    await tailorMade.update({
        fabricId: fabric.id,
        fabricType: fabric.type,
        price: tailorMade.price += fabric.price + 50,
        fabricColor: fabric.color,
        fabricImage: fabric.image
    })


    res.json(
        tailorMade
    )
}))



module.exports = router;
