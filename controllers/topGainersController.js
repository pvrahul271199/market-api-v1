const { getTopGainersData } = require('../services/topGainers');

async function fetchTopGainers(req, res) {
    try {
        console.log('Fetching top gainers data from service...');
        const data = await getTopGainersData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch top gainers data' });
    }
}

module.exports = { fetchTopGainers };
