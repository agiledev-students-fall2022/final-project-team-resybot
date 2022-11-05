const server = require("./app")
const port = 4000
server.listen(port, () => {
    console.log('Server running on port: ' + port);
})
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}