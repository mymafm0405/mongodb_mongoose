const express = require("express");
const bodyParser = require("body-parser");

// const mongo = require('./mongo')
const monogoooooose = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", monogoooooose.createProduct);

// app.get('/products', mongo.getProducts);

app.listen(3000);
