const axios = require('axios');

const transformData = (data) => {
    // Define the desired keys
    const desiredKeys = [
        "indexId", "indexName", "percentChange", "r1Week", "r1Month", "r3Month",
        "r1Year", "r3Year", "r5Year", "r6Month", "change1Week", "change1Month",
        "change3Month", "change6Month", "change1Year", "change3Year",
        "change5Year", "exchange", "symbol", "lastTradedPrice", "netChange",
        "advances", "advancesPerChange", "declines", "declinesPerChange"
    ];

    // Transform indicesList to desired schema with filtered keys
    const transformedNSE = data.indicesList.map(index => {
        const filteredData = {};
        desiredKeys.forEach(key => {
            if (index[key] !== undefined) filteredData[key] = index[key];
        });
        return filteredData;
    });

    return { nse: transformedNSE };
};

// Service to get NSE indices data
async function getNseIndicesData() {
    const url = 'https://etapi.indiatimes.com/et-screener/index-byid?indexids=2369,1913,2365,2371,1913,186,2907,1906,13602,2510,15431,2342,2340,2495,2346,13532,2907,15431,13603,186,13026,13655,13017,13027,13605,13030,13604,13016,15270,13022,13654,13029,13021,13653,32289,47194,15430,15436,15499,13019,14116,15501,16207';
    const headers = {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'origin': 'https://economictimes.indiatimes.com',
        'priority': 'u=1, i',
        'referer': 'https://economictimes.indiatimes.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    try {
        const response = await axios.get(url, { headers });
        return transformData(response.data);
    } catch (error) {
        console.error('Error in service:', error.message);
        throw new Error('Failed to fetch data from the external API');
    }
}

module.exports = { getNseIndicesData };
