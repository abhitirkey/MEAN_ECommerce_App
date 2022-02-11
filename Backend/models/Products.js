const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  richDescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 300,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
