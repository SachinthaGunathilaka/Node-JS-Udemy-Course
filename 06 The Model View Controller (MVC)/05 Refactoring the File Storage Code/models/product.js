const fs = require('fs');
const path = require('path');

// path to products.json file
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);


const getProductsFromFile = (cb) => { // getProductsFromFile is a function which takes a function as a argument
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};


module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // call getProductsFromFile function
    getProductsFromFile(products => { // callback function (products = [] or array)
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // fetchAll is a function which takes a function as a argument (this is called callback)
  static fetchAll(cb) {
    getProductsFromFile(cb); // getProductsFromFile is a function which takes a function as a argument
  }
};
