const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // rootDir is the path to root directory. Other part is the path from root to the html file
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
