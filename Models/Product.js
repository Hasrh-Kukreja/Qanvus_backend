
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productThumbnail: {
    type: String, // You can store the URL to the image as a string
    required: true,
  },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
