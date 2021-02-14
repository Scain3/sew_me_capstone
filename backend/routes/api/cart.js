const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { CartItem  } = require("../../db/models");

router.post('/', asyncHandler(async(req, res) => {
    const cartItem = await CartItem.create(req.body);
    


    res.json({

        cartItem
    }
    )

}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    //const {cartItem.tailorId } = req.body;
    console.log(req.params.id);
    const cartItem = await CartItem.findByPk(req.params.id);
    console.log(cartItem);
    await cartItem.destroy();
    res.json({
        message: 'Success!'
    })
}))

module.exports = router;
