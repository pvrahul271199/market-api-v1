const express = require('express');
const { fetchMostActiveVolume } = require('../controllers/mostActiveVolumeController');

const router = express.Router();

// Route to get most active volume
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/most-active-volume');
    next();
}, fetchMostActiveVolume);

module.exports = router;
