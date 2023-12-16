import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login'
import Home from './Home'
import Categories from './Categories';
import OilPaintings from './OilPaintings'; // Import the new component
import CustomizationForm from './CustomizeArtwork'; // Import the CustomizationForm component
import Calligraphy from './Calligraphy'


function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/OilPaintings" element={<OilPaintings />} /> 
        <Route path="/CustomizeArtwork" element={<CustomizationForm />} /> {/* Add this line */}
        <Route path="/category/Calligraphy.jsx" element={<Calligraphy />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
