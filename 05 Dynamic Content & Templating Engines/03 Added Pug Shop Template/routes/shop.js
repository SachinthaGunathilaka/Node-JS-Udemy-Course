const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products; // get products array
  // send parameters to shop.pug (prods and docTitle)
  res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;
