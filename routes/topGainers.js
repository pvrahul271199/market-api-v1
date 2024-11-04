const express = require('express');
const { fetchTopGainers } = require('../controllers/topGainersController');

const router = express.Router();

// Route to get top gainers
router.get('/', (req, res, next) => {
    console.log('Handling POST request for /api/top-gainers');
    next();
}, fetchTopGainers);

module.exports = router;
