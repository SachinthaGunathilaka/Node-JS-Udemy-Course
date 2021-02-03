const express = require('express');

const app = express();


app.get('/users', (req, res, next) => {
    console.log('Users');
    res.send('<h1>Hello from Express!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Home Page');
    res.send('<h1>The "Users" Page</h1>');
});



app.listen(3000);