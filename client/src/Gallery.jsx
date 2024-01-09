// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import helloImage from './images/tree.jpeg';
import helloImage1 from './images/art222.jpeg';
import helloImage2 from './images/art222.jpeg';
import firstartwork from './images/eye.jpg';
import secondArtowrk from './images/oil.jpg';
import thirdart from './images/starry.jpg';
import fourthArtwork from './images/sketch.png';
import logo2 from './images/logo2.png';
import pot from './images/pot.png';
import sea from './images/sea.jpg';
import sunrise from './images/sunrise.jpeg';
import HomePage from './Home';

import axios from 'axios';
import AddNewForm from './AddNewForm';
import ContactPage from './Contact';

const Gallery = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCategoryHover = () => {
    setDropdownVisible(true);
  };
  
  const handleCategoryLeave = () => {
    setDropdownVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Courier New, sans-serif',
      background: '#111', // Dark background color
      color: '#fff', // Text color
    },
    searchInputContainer: {
      position: 'relative',
    },
    header: {
      backgroundColor: 'black',
      color: 'white',
      padding: '15px',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    searchContainer: {
      flex: 1,
      marginLeft: '10px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    authLinks: {
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
    },
    authLink: {
      color: 'white',
      marginLeft: '10px',
      textDecoration: 'none',
    },
    categories: {
      backgroundColor: 'black !important',
      padding: '10px',
      textAlign: 'left',
      position: 'relative',
      display: 'inline-block',
    },
    categoryList: {
      listStyleType: 'none',
      padding: '10px',
      margin: '0',
    },
    categoryItem: {
      display: 'inline-block',
      marginRight: '20px',
    },
    // Updated styles for category links
    categoryLink: {
      color: 'white',
      fontSize: '18px',
      fontFamily: 'Courier New, sans-serif',
      textDecoration: 'none',
      display: 'block',
      padding: '8px',
    },
    categoryDropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      display: dropdownVisible ? 'block' : 'none',
      backgroundColor: '#333',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    },
    featuredArtworks: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '20px',
    },
    artwork: {
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
    },
    artworkHover: {
      transform: 'scale(1.05)',
    },
    searchInput: {
      width: '50%',
      padding: '5px',
      fontSize: '15px',
      borderRadius: '20px', // Adjust the value as needed
    },
    artworkImg: {
      width: 'auto',
      height: 'auto',
      borderBottom: '1px solid #ddd',
    },
    artworkDescription: {
      padding: '10px',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
    },
    slider: {
      width: '80%', // Adjust the width as needed
      margin: '20px auto',
    },
    craftyCanvasHeading: {
      fontFamily: 'cursive', // Set your desired cursive font here
      fontSize: '24px',
      margin: '0',
    },
    h2:{
        textAlign:'center',
    }
  };


  return (
    <div style={styles.body} className="home-page">
      
      {/* Header Section */}
      <header style={styles.header} className="header">
        <div style={styles.logo} className="logo">
          {/* Your Logo Image */}
        </div>
        <img src={logo2} alt="Crafty Canvas" style={{ width: '30%', height: '5%', margin: '0 ', marginLeft: '480px' }} to="/Home"/>

        <div style={styles.searchContainer}>
          {/* Search Bar */}
          <div style={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
            />
          </div>
        </div>
        
      </header>

      {/* Categories Section with Dropdown */}
      <nav
        style={styles.categories}
        className="categories"
        onMouseEnter={handleCategoryHover}
        onMouseLeave={handleCategoryLeave}
      >
        <Link to="/categories" style={styles.categoryLink}>
          Categories |
        </Link>
        <div style={styles.categoryDropdown}>
          <ul style={styles.categoryList}>
            <li style={styles.categoryItem}>
              <Link to="/category/OilPaintings" style={styles.categoryLink}>
                Oil Paintings
              </Link>
            </li>
            <li style={styles.categoryItem}>
              <Link to="/category/Calligraphy" style={styles.categoryLink}>
              Calligraphy
              </Link>
            </li>
            <li style={styles.categoryItem}>
              <Link to="/category/digital-artwork" style={styles.categoryLink}>
                Digital Artwork
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav style={styles.categories} className="categories">
        <ul style={styles.categoryList}>
          <li style={styles.categoryItem}>
            <Link to="/category1" style={styles.categoryLink}>
              Gallery |
            </Link>
          </li>
          <li style={styles.categoryItem}>
            <Link to="/category2" style={styles.categoryLink}>
              Popular Artworks |
            </Link>
          </li>
          
          <li style={styles.categoryItem}>
            <Link to="/Contact" style={styles.categoryLink}>
              Contact |
            </Link>
          </li>
          <li style={styles.categoryItem}>
            <Link to="/CustomizeArtwork" style={styles.categoryLink}>
              Comissioned Artwork
            </Link>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </nav>
        <h2 style={styles.h2}>Gallery</h2>
        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}} src={firstartwork} alt="Artwork 1"  /> 
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>The Eye</h3>
            <p>Eye showing the colorful abstract art</p>
            <p>Price: 80000</p>
          </div>
        </div>

        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}} src={secondArtowrk} alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Abstract City</h3>
            <p>City Artwork.</p>
            <p>Price: RS25000</p>
          </div>
          
        </div>

        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}} src={thirdart}alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Starry night</h3>
            <p>Inspired by Vincent van Gogh .</p>
            <p>Price: RS 34000</p>
          </div>
        </div>

        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}}src={fourthArtwork} alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Brown Lady</h3>
            <p>Sketch of a lady</p>
            <p>Price: RS 24000</p>
          </div>
        </div>

        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}}src={pot} alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>The Clay</h3>
            <p>A flower pot with pink blossoms.</p>
            <p>Price: RS 13000</p>
          </div>
        </div>
      
        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}}src={sea} alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>The sea</h3>
            <p>Oil Painting of Sea.</p>
            <p>Price: RS 19000</p>
          </div>
        </div>

        <div style={{width: '300px'}} className="artwork">
          <img style={{width: '300px'}}src={sunrise} alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3> Sunrise</h3>
            <p>Oil Painting of Sunrise.</p>
            <p>Price: RS 17000</p>
          </div>
        </div>
        {/* Add more artworks as needed */}

      {/* Footer Section */}
      <footer style={styles.footer} className="footer">
        <p>&copy; 2023 Crafty Canvas</p>
      </footer>
    </div>
  );
};

export default Gallery;
