const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, CartItem, Fabric, Pattern, TailorMade } = require("../../db/models");

router.post('/', asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.body.userId);
    const fabric = await Fabric.findByPk(req.body.fabricId);
    const cart = await Fabric.findByPk(req.body.cartId);
    const tailor = await Fabric.findByPk(req.body.tailorId)

    const cartItem = await CartItem.create({
        buyerId: user.id,
        fabricId: fabric.id,
        cartId: cart.id,
        tailor: tailor.id
    })

    res.json(
        cartItem
    )

}))
