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
    const transformedBSE = data.indicesList.map(index => {
        const filteredData = {};
        desiredKeys.forEach(key => {
            if (index[key] !== undefined) filteredData[key] = index[key];
        });
        return filteredData;
    });

    return { bse: transformedBSE };
};

// Service to get BSE indices data
async function getBseIndicesData() {
    const url = 'https://etapi.indiatimes.com/et-screener/index-byid?indexids=2365,2340,2364,2342,1906,2022,2647,14849,14856,14857,14911,2157,14917,14848,2416,2275,2273,2274,2449,2555,14918,2276,6929,2647,16021,12725,13794,14852,14912,14958,14959,15817,16178';
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

module.exports = { getBseIndicesData };
