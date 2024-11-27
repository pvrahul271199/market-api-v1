const express = require('express');
const { fetchStockDetails } = require('../controllers/getStockDetailsController');

const router = express.Router();

router.get('/', fetchStockDetails);

module.exports = router;
