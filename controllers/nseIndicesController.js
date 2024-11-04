const { getNseIndicesData } = require('../services/nseIndicesService');

async function fetchNseIndices(req, res) {
    try {
        console.log('Fetching NSE indices data from service...');
        const data = await getNseIndicesData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch NSE indices data' });
    }
}

module.exports = { fetchNseIndices };
