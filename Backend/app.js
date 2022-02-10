const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(morgan("tiny"));

const productsRouter = require("./routes/Products");
app.use(`${api}/products`, productsRouter);

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
