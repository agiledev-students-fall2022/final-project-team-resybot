const express = require('express');
const bookings = require('./routes/bookings.js');
const requests = require('./routes/requests');
const search = require('./routes/search');
const auth = require('./routes/auth')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const server = express();

const port = 3001
// set bodyparser
server.use(express.json());
server.use(cookieParser())
server.use(express.urlencoded({extended: true}))

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
server.use('/user', auth)

mongoose.connection.once('open', () => console.log("Connected succesfully to MongoDB"))
module.exports = server