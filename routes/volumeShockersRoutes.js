const express = require('express');
const { fetchVolumeShockers } = require('../controllers/volumeShockersController');

const router = express.Router();

// Route to get volume shockers data
router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/volume-shockers');
    next();
}, fetchVolumeShockers);

module.exports = router;
