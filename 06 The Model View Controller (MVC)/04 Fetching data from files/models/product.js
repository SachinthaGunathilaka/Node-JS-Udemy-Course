const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // p contains path to products.json file
    const p = path.join(
      path.dirname(process.mainModule.filename), // path to root
      'data',
      'products.json'
    );

    // read products.json file
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
                   // Convert json to js object(it will return a array)
        products = JSON.parse(fileContent);
      }
      // add current product to products array
      products.push(this);
      // Convert js object to json and write to products.json
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // fetchAll is a function which takes a function as a argument (this is called callback)
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    // This is a async function(We cannot simply return data from async func)
    // because caller will get get undefined value before async function executed.
    // So we need to take function as the argument as execute this func, after result get from async func
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        // call cb function with empty array
        cb([]);
      }
      // call cb function with the array taken from the file
      cb(JSON.parse(fileContent)); // return JSON.parse(fileContent) - wrong
    });
  }
};
