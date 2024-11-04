const express = require('express');
const { fetchTopLosers } = require('../controllers/topLosersController');

const router = express.Router();

// Route to get top losers
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/top-losers');
    next();
}, fetchTopLosers);

module.exports = router;
