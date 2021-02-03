const http = require('http');

// import user defined module
const routes = require('./routes');

console.log(routes.someText); // get attribute in imported module

const server = http.createServer(routes.handler); // Call function in imported module
// If imported module has only one element it can be called directly. (Ex : routes)

server.listen(3000);
