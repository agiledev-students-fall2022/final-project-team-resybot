const express = require('express');
const bookings = require('./routes/bookings.js');
const requests = require('./routes/requests');
const makerequests = require('./routes/makerequests');
const search = require('./routes/search');

const server = express();

const port = 5000
// set bodyparser
server.use(express.json());

server.use('/', bookings);
server.use('/requests', requests);
server.use('/makerequests', makerequests);
server.use('/search', search);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});