const { getBseIndicesData } = require('../services/bseIndicesService');

async function fetchBseIndices(req, res) {
    try {
        console.log('Fetching BSE indices data from service...');
        const data = await getBseIndicesData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch BSE indices data' });
    }
}

module.exports = { fetchBseIndices };
