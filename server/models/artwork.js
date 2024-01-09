// models/Artwork.js
const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Artwork = mongoose.model('artworks', artworkSchema);

module.exports = Artwork;
