const express = require('express');
const { fetchNseIndices } = require('../controllers/nseIndicesController');

const router = express.Router();

// Route to get NSE indices
router.get('/', fetchNseIndices);

module.exports = router;
