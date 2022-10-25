const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Mido:QCsx!vr2-MdeJkX@cluster0.vejqa4q.mongodb.net/products_test?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("connected");
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Could not connect to database!" });
  }

  client.close();
  res.json({ newProduct });
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    console.log(error);
    return res.json({ message: "Could not get your data!" });
  }

  client.close();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
