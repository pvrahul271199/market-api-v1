const { getVolumeShockersData } = require('../services/volumeShockers');

async function fetchVolumeShockers(req, res) {
    try {
        console.log('Fetching volume shockers data from service...');
        const data = await getVolumeShockersData();
        console.log('Data fetched successfully');
        res.json(data);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch volume shockers data' });
    }
}

module.exports = { fetchVolumeShockers };
