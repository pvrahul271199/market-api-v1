const { getNew52WeekLowData } = require('../services/new52WeekLow');

async function fetchNew52WeekLow(req, res) {
    try {
        console.log('Fetching new 52-week low data from service...');
        const data = await getNew52WeekLowData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch new 52-week low data' });
    }
}

module.exports = { fetchNew52WeekLow };
