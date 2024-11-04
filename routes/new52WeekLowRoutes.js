const express = require('express');
const { fetchNew52WeekLow } = require('../controllers/New52WeekLowController');

const router = express.Router();

// Route to get new 52-week low data
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/new-52-week-low');
    next();
}, fetchNew52WeekLow);

module.exports = router;
