const axios = require('axios');

function lowResponseConverter(apiResponse) {
    return apiResponse.dataList.map(asset => {
        const dataMapping = {
            assetName: asset.assetName,
            assetSymbol: asset.assetSymbol,
            currentPrice: findValue(asset.data, "lastTradedPrice"),
            percentChange: findValue(asset.data, "percentChange"),
            netChange: findValue(asset.data, "netChange"),
            volume: findValue(asset.data, "volume"),
            marketCap: findValue(asset.data, "marketCap"),
            returns: {
                "1W": findValue(asset.data, "R1WeekReturn"),
                "1M": findValue(asset.data, "R1MonthReturn"),
                "3M": findValue(asset.data, "R3MonthReturn"),
                "6M": findValue(asset.data, "R6MonthReturn"),
                "1Y": findValue(asset.data, "R1YearReturn"),
                "3Y": findValue(asset.data, "R3YearReturn"),
                "YTD": findValue(asset.data, "ytdReturn")
            },
            fiftyTwoWeekHigh: findValue(asset.data, "fiftyTwoWeekHigh"),
            fiftyTwoWeekLow: findValue(asset.data, "fiftyTwoWeekLow"),
        };
        return dataMapping;
    });
}

function findValue(dataArray, keyId) {
    const dataItem = dataArray.find(item => item.keyId === keyId);
    return dataItem ? dataItem.value : null;
}

// Service to get new 52-week low data
async function getNew52WeekLowData() {
    const url = 'https://etapi.indiatimes.com/et-screener/intraday-stats';
    const payload = {
        viewId: 6932,
        apiType: "new-52-week-low",
        filterValue: [2371],
        filterType: "index",
        sort: [],
        pagesize: 100,
        pageno: 1
    };
    const headers = {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'isprime': 'false',
        'origin': 'https://economictimes.indiatimes.com',
        'priority': 'u=1, i',
        'referer': 'https://economictimes.indiatimes.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    };

    try {
        const response = await axios.post(url, payload, { headers });
        return lowResponseConverter(response.data);
    } catch (error) {
        console.error('Error in service:', error.message);
        throw new Error('Failed to fetch data from the external API');
    }
}

module.exports = { getNew52WeekLowData };
