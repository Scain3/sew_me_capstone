const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Op } = require('sequelize');
const { Pattern, Fabric } = require('../../db/models');


const searchProducts = async(term) => {
    return await Pattern.findAll({ where: {patternCompany: { [Op.iLike]: term }}});
}

router.get('/', asyncHandler(async(req, res) => {
    let products;
    let error = "";
    try{
        console.log(searchProducts);
        products = await searchProducts(`%${req.query.term}%`);
        console.log(products);
    } catch(e){
        console.error(e);
        error = `An error occurred that reads "${e.message}". Check the console for more details.`;
    }
    res.json({
        products
    })
}))

module.exports = router;
