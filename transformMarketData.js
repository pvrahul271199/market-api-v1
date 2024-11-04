// transformMarketData.js

function transformMarketData(apiResponse) {
    const isMarketOpen = apiResponse.marketStatus.currentMarketStatus === "LIVE";

    const indices = apiResponse.marketBandList
        .find(section => section.sectionName === "S1")
        .bandServiceMetas.filter(meta => meta.serviceType === "INDEX")
        .map(meta => ({
            serviceName: meta.serviceName,
            currentIndexValue: meta.currentIndexValue,
            netChange: meta.netChange,
            percentChange: meta.percentChange,
            high: meta.high,
            low: meta.low,
            open: meta.open,
            dateTime: meta.dateTime
        }));

    const topGainers = apiResponse.marketBandList
        .find(section => section.sectionName === "S2")
        .bandServiceMetas.filter(meta => meta.serviceName === "Gainer")
        .map(meta => ({
            companyShortName: meta.companyShortName,
            current: meta.current,
            netChange: meta.netChange,
            percentChange: meta.percentChange,
            high: meta.high,
            low: meta.low,
            open: meta.open
        }));

    const topLosers = apiResponse.marketBandList
        .find(section => section.sectionName === "S2")
        .bandServiceMetas.filter(meta => meta.serviceName === "Loser")
        .map(meta => ({
            companyShortName: meta.companyShortName,
            current: meta.current,
            netChange: meta.netChange,
            percentChange: meta.percentChange,
            high: meta.high,
            low: meta.low,
            open: meta.open
        }));

    const volumeGainers = apiResponse.marketBandList
        .find(section => section.sectionName === "S2")
        .bandServiceMetas.filter(meta => meta.serviceName === "Loser")
        .map(meta => ({
            companyShortName: meta.companyShortName,
            current: meta.current,
            netChange: meta.netChange,
            percentChange: meta.percentChange,
            high: meta.high,
            low: meta.low,
            open: meta.open
        }));

    return {
        isMarketOpen,
        indices,
        topGainers,
        topLosers
    };
}

module.exports = transformMarketData;
