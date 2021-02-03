// In Node JS we cannot give relative paths
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {

  // sendFIle function used to send html files
  // "__dirname" => absolute path for the current file, "../" => go back
  // join method concatenate the paths separate using commas
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
