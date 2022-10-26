const mongoose = require("mongoose");

const Product = require("./models/product");

const url =
  "mongodb+srv://Mido:QCsx!vr2-MdeJkX@cluster0.vejqa4q.mongodb.net/products_test?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected with mongoose");
  })
  .catch(() => {
    console.log("could not use mongoose to connect");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  await createdProduct.save();

  res.json(createdProduct);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
