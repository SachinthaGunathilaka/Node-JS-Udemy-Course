const express = require('express');

// bodyParser is used to get the body from the request
const bodyParser = require('body-parser');

const app = express();

// for each request get the body from the request
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    // when submitting form it will redirect to /product
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// this func will only executed for /product "POST" request
app.post('/product', (req, res, next) => {
    console.log(req.body); // request body
    res.redirect('/'); // redirect to '/'
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
