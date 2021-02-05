
const products = [];

// Exporting a class (There are many ways to export - See the documentation)
module.exports = class Product { // Class for a product
    constructor(t) {
        this.title = t;
    }

    // save product to products array
    save() {
        products.push(this);
    }

    // Static method to get all products (Same as java)
    static fetchAll() {
        return products;
    }
}