// routes/artworks.js
const express = require('express');
const router = express.Router();
const Artwork = require('../models/Artwork');

// Create a new artwork
router.post('/', async (req, res) => {
  try {
    const artwork = new Artwork(req.body);
    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    console.error('Error creating artwork:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all artworks
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (error) {
    console.error('Error fetching artworks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// You can add more routes as needed, such as getting a single artwork by ID, updating, or deleting.

module.exports = router;
