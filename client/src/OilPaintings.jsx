// OilPaintings.jsx
import React from 'react';
import secondArtowrk from './images/oil.jpg';
import { Link } from 'react-router-dom';

import secart from './images/oill.jpg';
import logo2 from './images/logo2.png';

const OilPaintings = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Courier New, sans-serif',
      background: '#111', // Dark background color
      color: '#fff', // Text color
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px',
    },
    painting: {
      width: '50%',
      maxWidth: '600px',
      marginBottom: '20px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
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
    searchInputContainer: {
      position: 'relative',
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
    categoryList: {
      listStyleType: 'none',
      padding: '10px',
      margin: '0',
    },
  };

  return (
    
    <div style={styles.body}>
      <header style={styles.header} className="header">
        <div style={styles.logo} className="logo">
          {/* Your Logo Image */}
        </div>
        <img src={logo2} alt="Crafty Canvas" style={{ width: '30%', height: '5%', margin: '0 ', marginLeft: '480px' }}/>

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
            <Link to="/category2" style={styles.categoryLink}>
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
      <div style={styles.container}>
        <h2>Oil Paintings</h2>
        <div style={styles.painting}>
          {/* Replace the image source with your actual image */}
          <img src={secondArtowrk} alt="Oil Painting 1" style={{ width: '100%', height: 'auto' }} />
          <p>Description of the oilpainting goes here.</p>
        </div>
        <div style={styles.painting}>
          {/* Replace the image source with your actual image */}
          <img src={secart} alt="Oil Painting 2" style={{ width: '100%', height: 'auto' }} />
          <p>Description of another oil painting goes here.</p>
        </div>
        {/* Add more paintings and descriptions as needed */}
      </div>
    </div>
  );
};

export default OilPaintings;
