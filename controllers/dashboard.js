const Product = require("../models/products");

exports.getIndexPage = (req, res) => {
  Product.fetchAll().then(([rows, field]) => {
    res.render("dashboard", { products: rows });
  });
};

exports.getInputForm = (req, res) => {
  res.render("input");
};

exports.postSubmitProduct = (req, res) => {
  const product = new Product(req.body.name, req.body.price, req.body.stock);
  product
    .create()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteProduct = (req, res) => {
  Product.deleteById(req.body.prodId)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res) => {
  Product.fetchById(req.params.idProduct)
    .then(([rows, field]) => {
      res.render("edit-product", { product: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditProduct = (req, res) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.stock,
    req.body.id
  );
  product
    .update()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
