const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { CartItem, Cart  } = require("../../db/models");

//Add To Cart
router.post('/', asyncHandler(async(req, res) => {
    const cartItem = await CartItem.create(req.body);



    res.json({

        cartItem
    }
    )

}))

//Delete from Cart
router.delete('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const cartItem = await CartItem.findByPk(req.params.id);
    await cartItem.destroy();
    res.json({
        message: 'Success!'
    })
}))

//Purchase an Item
// router.post('/', asyncHandler(async(req, res) => {
//     const {user} = req;
//     const cart = await Cart.create({
//         userId: user.id
//     })

//     res.json({
//         user,
//         cart
//     })
// }))

module.exports = router;
