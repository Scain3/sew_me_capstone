const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Op } = require('sequelize');
const { Pattern, Fabric } = require('../../db/models');


const patternProducts = async(term) => {
    return await Pattern.findAll({
        where: {
            [Op.or]: [{ patternCompany: { [Op.iLike]: term }}, {patternNumber: { [Op.iLike]: term }}, {patternType: { [Op.iLike]: term }}]

        }
    });
}
const fabricProducts = async(term) => {
    return await Fabric.findAll({
        where: {
            [Op.or]: [{ type: { [Op.iLike]: term }}, {color: { [Op.iLike]: term }}]

        }
    });
}

router.get('/', asyncHandler(async(req, res) => {
    let patterns;
    let fabrics;
    let error = "";
    try{
        patterns = await patternProducts(`%${req.query.term}%`);
        fabrics = await fabricProducts(`%${req.query.term}%`);
    } catch(e){
        console.error(e);
        error = `An error occurred that reads "${e.message}". Check the console for more details.`;
    }
    res.json({
        patterns,
        fabrics,
        error
    })
}))

module.exports = router;
