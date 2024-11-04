const { getNew52WeekHighData } = require('../services/new52WeekHigh');

async function fetch52WeekHigh(req, res) {
    try {
        console.log('Fetching 52-week high data from service...');
        const data = await getNew52WeekHighData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch 52-week high data' });
    }
}

module.exports = { fetch52WeekHigh };
