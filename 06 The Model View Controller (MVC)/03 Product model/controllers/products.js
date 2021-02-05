// Import Product class
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};


exports.postAddProduct = (req, res, next) => {
  // Create object of Product with the incoming request title
  const product = new Product(req.body.title);
  // Add product to product array
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // Get all products
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products, // send those products to shop.ejs
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};
