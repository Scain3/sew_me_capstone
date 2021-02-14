const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { CartItem  } = require("../../db/models");

router.post('/', asyncHandler(async(req, res) => {
    const cartItem = await CartItem.create(req.body);
    console.log(cartItem);


    res.json({

        cartItem
    }
    )

}))

router.delete('/:cartId(\\d+)', asyncHandler(async(req, res, next) => {
    console.log(req.params.cartId);
    const cartItem = await CartItem.findByPk(req.params.cartId);
    console.log(cartItem);
    await cartItem.destroy();
    res.json({
        message: 'Success!'
    })
}))

module.exports = router;
