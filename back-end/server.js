<<<<<<< HEAD
#!/usr/bin/env node
const server = require("./app") // load up the web server
const port = 3000 // the port to listen to for incoming requests
// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}
=======
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
>>>>>>> e16718e (basic template for express app)
