const { getMostActiveVolumeData } = require('../services/mostActiveVolume');

async function fetchMostActiveVolume(req, res) {
    try {
        console.log('Fetching most active volume data from service...');
        const data = await getMostActiveVolumeData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch most active volume data' });
    }
}

module.exports = { fetchMostActiveVolume };
