const express = require('express');
const axios = require('axios');
const router = express.Router();
const transformMarketData = require('./transformMarketData');

router.get('/market-band', async (req, res) => {
    try {
        const response = await axios.get('https://etmarketsapis.indiatimes.com/ET_Stats/getMarketBand', {
            headers: {
                'accept': '*/*',
                'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                'origin': 'https://economictimes.indiatimes.com',
                'priority': 'u=1, i',
                'referer': 'https://economictimes.indiatimes.com/',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
            }
        });
        console.log(transformMarketData(response.data));
        res.json(transformMarketData(response.data));
    } catch (error) {
        console.error('Error fetching market band data:', error);
        res.status(500).send('Error fetching market band data');
    }
});

module.exports = router;
