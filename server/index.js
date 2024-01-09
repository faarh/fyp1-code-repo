const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors") // Fix typo here
//const EmployeeModel = require('./models/Employee') // Remove extra space
//const artworksRouter = require('./routes/artworks');
const bodyParser = require('body-parser');
const router = express.Router();
const { EmployeeModel, ArtworkModel } = require('./models/Employee'); // Update the path


const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) => {
    const {email, password} =req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password== password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no record exist")
        }
    })

})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});


app.post('/addArtwork', async (req, res) => {
    try {
      const artworkData = req.body;
      const newArtwork = await ArtworkModel.create(artworkData);
      res.json(newArtwork);
    } catch (error) {
      console.error('Error adding artwork:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to get all artworks
app.get('/getArtworks', async (req, res) => {
    try {
      const artworks = await ArtworkModel.find();
      res.json(artworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;


  
  // Handle the POST request for adding product details
  app.post('/productDetails', async (req, res) => {
    try {
      // Extract the product details from the request body
      const { name, price, description, image } = req.body;
  
      // Create a new instance of the ProductDetailsModel
      const newProductDetails = new ProductDetailsModel({
        name,
        price,
        description,
        image,
        // Set other fields accordingly
      });
  
      // Save the new product details to the database
      await newProductDetails.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Product details added successfully' });
    } catch (error) {
      console.error('Error adding product details:', error);
      // Respond with an error message
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  app.get('/productDetails', async (req, res) => {
    try {
      // Fetch all product details from the database
      const allProductDetails = await ProductDetailsModel.find();
  
      // Respond with the fetched product details
      res.status(200).json(allProductDetails);
    } catch (error) {
      console.error('Error fetching product details:', error);
      // Respond with an error message
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



app.listen(3001, () => {
    console.log("server is running");
});