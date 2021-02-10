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

    console.log(fabric.id);
    console.log(fabric.price);

    await tailorMade.update({
        fabricId: fabric.id,
        price: fabric.price,
        fabricColor: fabric.color,
        fabricImage: fabric.image
    })

    //console.log(tailor);
    //console.log(fabric);
    // console.log(fabric.id);
    // console.log(fabric.dataValues.price);
    // console.log(fabric.dataValues.color);
    // console.log(fabric.dataValues.image);
    // console.log(tailor.fabricId);
    // console.log(tailor.price);
    // console.log(tailor.fabricColor);
    // console.log(tailor.fabricImage);

    res.json(
        tailorMade
    )
}))



module.exports = router;
