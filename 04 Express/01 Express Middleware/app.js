const http = require('http');

const express = require('express');

// app is a function in express
const app = express();

// by use method express middleware can be set
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line (If this is not exist below use method will not be executed)
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    // No need to setHeader (It will set by default)
    res.send('<h1>Hello from Express!</h1>'); // body of the send can be anything
});

// app is a function from express

const server = http.createServer(app);
server.listen(3000);

// we can replace above 2 lines by (so we can remove http import line also)
// app.listen(3000)
