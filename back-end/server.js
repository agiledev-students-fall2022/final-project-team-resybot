const express = require('express');
const bookings = require('./routes/bookings.js');
const requests = require('./routes/requests');
const search = require('./routes/search');

const server = express();

const port = 3001
// set bodyparser
server.use(express.json());

server.use('/bookings', bookings);
server.use('/requests', requests);
server.use('/search', search);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});