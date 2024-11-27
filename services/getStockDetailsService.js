const axios = require('axios');

const fetchQuoteEquity = async (symbol) => {
    const requestUrl = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`
    console.log(requestUrl);
    try {
        const response = await axios.get(requestUrl, {
            headers: {
                'accept': '*/*',
                'accept-language': 'en-GB,en;q=0.9',
                'referer': `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
                'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};


fetchQuoteEquity("INOXWIND");

// module.exports = { getStockDetailsData };
