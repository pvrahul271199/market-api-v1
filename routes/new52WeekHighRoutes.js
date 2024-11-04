const express = require('express');
const { fetch52WeekHigh } = require('../controllers/new52WeekHighController');

const router = express.Router();

// Route to get 52-week high data
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/52-week-high');
    next();
}, fetch52WeekHigh);

module.exports = router;
