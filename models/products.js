const db = require("../utils/database");

module.exports = class Product {
  constructor(productName, price, stock, idProduct = null) {
    this.productName = productName;
    this.price = price;
    this.stock = stock;
    this.idProduct = idProduct;
  }
  create() {
    return db.execute(
      "INSERT INTO products (product_name, price, stock) VALUES (?, ?, ?)",
      [this.productName, this.price, this.stock]
    );
  }
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE id_product = ?", [id]);
  }
  static fetchById(id) {
    return db.execute("SELECT * FROM products WHERE id_product = ?", [id]);
  }
  update() {
    return db.execute(
      "UPDATE products SET product_name = ?, price = ?, stock = ? WHERE id_product = ?",
      [this.productName, this.price, this.stock, this.idProduct]
    );
  }
};
