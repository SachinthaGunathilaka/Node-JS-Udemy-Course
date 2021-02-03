const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Empty array to hold products
const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // Append new product to products array
  products.push({ title: req.body.title });
  // After adding redirect to '/'
  res.redirect('/');
});

// Exporting multiple elements (routes and products)
exports.routes = router;
exports.products = products;
