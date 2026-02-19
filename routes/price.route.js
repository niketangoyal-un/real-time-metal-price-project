const express=require('express');
const {  getPrices } = require('../controllers/price.controller');
const router=express.Router()

router.route('/getPrices').get(getPrices);

module.exports=router;