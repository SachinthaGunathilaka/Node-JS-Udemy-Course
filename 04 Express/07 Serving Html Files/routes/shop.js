const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

  // sendFIle function used to send html files
  // "__dirname" => absolute path for the current file, "../" => go back
  // join method concatenate the paths separate using commas
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
