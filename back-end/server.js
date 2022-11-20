const express = require('express');
const bookings = require('./routes/bookings.js');
const requests = require('./routes/requests');
const search = require('./routes/search');
const mongoose = require('mongoose')

const server = express();

const port = 3001
// set bodyparser
server.use(express.json());

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
mongoose.connect(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.log(error));

server.use('/bookings', bookings);
server.use('/requests', requests);
server.use('/search', search);

mongoose.connection.once('open', () => console.log("Connected succesfully to MongoDB"))
module.exports = server