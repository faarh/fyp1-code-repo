// models/ProductDetails.js

const mongoose = require('mongoose');

const productDetailsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  // Add a field for the image file
  image: {
    data: Buffer,  // Store image data as Buffer
    contentType: String,  // Store content type (e.g., image/png, image/jpeg)
  },
});

const ProductDetails = mongoose.model('artworks', productDetailsSchema);

module.exports = ProductDetails;
