const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.send('Yes, this works');
})

app.listen(port, () => {
    console.log('Express server listening on port ${port}');
})
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}