const express = require('express');
const { fetchNear52WeekLow } = require('../controllers/near52WeekLowController');

const router = express.Router();

// Route to get near 52-week low data
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/near-52-week-low');
    next();
}, fetchNear52WeekLow);

module.exports = router;
