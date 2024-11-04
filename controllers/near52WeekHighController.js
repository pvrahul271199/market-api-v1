const { getNear52WeekHighData } = require('../services/Near52WeekHigh');

async function fetchNear52WeekHigh(req, res) {
    try {
        console.log('Fetching near 52-week high data from service...');
        const data = await getNear52WeekHighData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch near 52-week high data' });
    }
}

module.exports = { fetchNear52WeekHigh };
