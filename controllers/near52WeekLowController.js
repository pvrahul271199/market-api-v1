const { getNear52WeekLowData } = require('../services/Near52WeekLow');

async function fetchNear52WeekLow(req, res) {
    try {
        console.log('Fetching near 52-week low data from service...');
        const data = await getNear52WeekLowData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch near 52-week low data' });
    }
}

module.exports = { fetchNear52WeekLow };
