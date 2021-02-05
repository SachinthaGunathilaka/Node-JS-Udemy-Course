const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// call function for incoming requests(no parenthesis)
router.get('/', productsController.getProducts);

module.exports = router;
