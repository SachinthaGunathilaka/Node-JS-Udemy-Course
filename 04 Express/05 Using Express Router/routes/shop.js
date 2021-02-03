const express = require('express');

// Get router
const router = express.Router();

// Router is same as app
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

// export router
module.exports = router;
