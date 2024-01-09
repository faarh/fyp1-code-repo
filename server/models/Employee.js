const mongoose = require('mongoose')

const EmployeeSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const ArtworkSchema = new mongoose.Schema({
    name: String,
    price: String,   
    description: String,
    image: String, // Assuming you store image paths or URLs
  });

  const EmployeeModel =mongoose.model("employees" , EmployeeSchema);

  const ArtworkModel = mongoose.model('artworks', ArtworkSchema);
  module.exports = { EmployeeModel, ArtworkModel };
