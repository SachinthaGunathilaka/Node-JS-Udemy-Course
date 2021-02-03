const path = require('path');

const express = require('express');

// import root path
const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // rootDir is the path to root directory. Other part is the path from root to the html file
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
