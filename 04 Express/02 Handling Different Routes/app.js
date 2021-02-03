const express = require('express');

const app = express();

// app.use function is overloaded function
// In below cases url is given (not the exact URL, only need to match front part)
// If we use get or post instead of use, it will work for exact URL

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next(); // call next app.use func
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

// if above func is not run this will be run
app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
