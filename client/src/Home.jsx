import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import helloImage from './tree.jpeg';
import helloImage1 from './art222.jpeg';
import helloImage2 from './art222.jpeg';

const HomePage = () => {
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
      marginLeft: '20px',
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
    },
    categoryList: {
      listStyleType: 'none',
      
      padding: '0',
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
      width: '1000%',
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
  };

  return (
    <div style={styles.body} className="home-page">
      {/* Header Section */}
      <header style={styles.header} className="header">
        <div style={styles.logo} className="logo">
          {/* Your Logo Image */}
          <img src="logo.png" alt="Logo" />
        </div>
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
        <div style={styles.authLinks} className="auth-links">
          <Link to="/login" style={styles.authLink}>
            Login
          </Link>
          <Link to="/register" style={styles.authLink}>
            Sign Up
          </Link>
        </div>
      </header>

      {/* Categories Section */}
      <nav style={styles.categories} className="categories">
        <ul style={styles.categoryList}>
          <li style={styles.categoryItem}>
            <Link to="/category1" style={styles.categoryLink}>
              Gallery
            </Link>
          </li>
          <li style={styles.categoryItem}>
            <Link to="/category2" style={styles.categoryLink}>
              Popular Artworks
            </Link>
          </li>
          <li style={styles.categoryItem}>
            <Link to="/Categories" style={styles.categoryLink}>
              Category
            </Link>
          </li>
          <li style={styles.categoryItem}>
            <Link to="/category2" style={styles.categoryLink}>
              Contact
            </Link>
          </li>
          <li>
          <Link to="/CustomizeArtwork" style={styles.categoryLink}>
              Customize Artwork
          </Link>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </nav>

      <section style={styles.slider} className="slider">
        <Slider autoplay={true} autoplaySpeed={2400}>
          <div style={{ textAlign: 'center' }}>
            <img src={helloImage} alt="Slider 1" style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
          </div>
          <div>
            <img src={helloImage1} alt="Slider 1" style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
          </div>
          <div>
            <img src={helloImage2} alt="Slider 1" style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
          </div>
        </Slider>
      </section>

      {/* Featured Artworks Section */}
      <section style={styles.featuredArtworks} className="featured-artworks">
        <div style={styles.artwork} className="artwork">
          <img style={styles.artworkImg} src="art22.jpeg" alt="Artwork 1" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Artwork Title 1</h3>
            <p>Description of the artwork goes here.</p>
          </div>
        </div>

        <div style={styles.artwork} className="artwork">
          <img style={styles.artworkImg} src="artwork2.jpg" alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Artwork Title 2</h3>
            <p>Description of the artwork goes here.</p>
          </div>
        </div>
        {/* Add more artworks as needed */}
      </section>

      {/* Footer Section */}
      <footer style={styles.footer} className="footer">
        <p>&copy; 2023 Crafty Canvas</p>
      </footer>
    </div>
  );
};

export default HomePage;
