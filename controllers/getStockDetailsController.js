const { getBseIndicesData } = require('../services/bseIndicesService');

async function fetchStockDetails(req, res) {
    try {
        const { symbol } = req.params;
        console.log('Fetching Stock data  data from service...');
        const data = await getBseIndicesData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch BSE indices data' });
    }
}

module.exports = { fetchBseIndices };
