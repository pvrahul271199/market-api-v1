const express = require('express');
const { fetchBseIndices } = require('../controllers/bseIndicesController');

const router = express.Router();

// Route to get NSE indices
router.get('/', fetchBseIndices);

module.exports = router;
