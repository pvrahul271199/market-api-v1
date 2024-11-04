const { getTopLosersData } = require('../services/topLosers');

async function fetchTopLosers(req, res) {
    try {
        console.log('Fetching top losers data from service...');
        const data = await getTopLosersData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch top losers data' });
    }
}

module.exports = { fetchTopLosers };
