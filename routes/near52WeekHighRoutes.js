const express = require('express');
const { fetchNear52WeekHigh } = require('../controllers/Near52WeekHighController');

const router = express.Router();

// Route to get near 52-week high data
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/near-52-week-high');
    next();
}, fetchNear52WeekHigh);

module.exports = router;
