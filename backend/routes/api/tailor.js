const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res,next).catch(next);
const {TailorMade, Pattern, Fabric, User} = require("../../db/models");

router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.body.userId);

    const pattern = await Pattern.findByPk(req.params.id);

    console.log(pattern);



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
    const fabric = Fabric.findByPk(req.body.fabricId);
    const tailor = await TailorMade.create({
        price: fabric.price,
        fabricImage: fabric.image
    })
}))



module.exports = router;
