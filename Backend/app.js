const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

const api = process.env.API_URL;

app.use(express.json());
app.use(morgan("tiny"));

app.listen(3000, () => {
  console.log(api);
});

connString = process.env.connString;
mongoose
  .connect(connString)
  .then(() => {
    console.log("Database connection ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  const product = {
    id: 1,
    name: "mow chuff",
  };
  res.send(product);
});
