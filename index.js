const express = require('express');
const marketRouter = require('./marketRouter'); // Adjust path as needed
const topGainersRoute = require('./routes/topGainers'); // Adjust path as needed
const topLosersRoute = require('./routes/topLosersRoutes'); // Adjust path as needed
const mostActiveVolumeRoute = require('./routes/mostActiveVolumeRoutes'); // Adjust path as needed
const newfiftyTwoWeekHighRoute = require('./routes/new52WeekHighRoutes'); // Import the new 52-week high route
const newfiftyTwoWeekLowRoute = require('./routes/new52WeekLowRoutes'); // Import the new 52-week high route
const near52WeekHighRoute = require('./routes/near52WeekHighRoutes'); // Import the new 52-week high route
const near52WeekLowRoute = require('./routes/near52WeekLowRoutes'); // Import the new 52-week high route
const volumeShockersRoute = require('./routes/volumeShockersRoutes'); // Import the volume shockers route
const nseIndicesRoute = require('./routes/nseIndices'); // Import the volume shockers route
const bseIndicesRoute = require('./routes/bseIndices');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Use the router
app.use('/api', marketRouter);

// Use the top gainers route
app.use('/api/top-gainers', topGainersRoute);
app.use('/api/top-losers', topLosersRoute);
app.use('/api/most-active-volume', mostActiveVolumeRoute);
app.use('/api/new-52-week-high', newfiftyTwoWeekHighRoute); // Add this line
app.use('/api/new-52-week-low', newfiftyTwoWeekLowRoute);
app.use('/api/near-52-week-high', near52WeekHighRoute); // Add this line
app.use('/api/near-52-week-low', near52WeekLowRoute); // Add this line
app.use('/api/volume-shockers', volumeShockersRoute); // Add this line
app.use('/api/nse-indices', nseIndicesRoute);
app.use('/api/bse-indices', bseIndicesRoute);

app.get('/ping', (req, res) => {
    console.log('Ping received');
    res.send('Pong');
});

app.get('/', (req, res) => {
    console.log('Root endpoint hit');
    res.send('v1 Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})