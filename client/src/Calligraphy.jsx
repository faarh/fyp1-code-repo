// Calligraphy.jsx
import React from 'react';
import secondArtowrk from './images/oil.jpg';
import secart from './images/oill.jpg';

const Calligraphy = () => {
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
      padding: '300px',
    },
    painting: {
      width: '50%',
      maxWidth: '600px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Calligraphy</h2>
        <div style={styles.painting}>
          {/* Replace the image source with your actual image */}
          <img src={secondArtowrk} alt="Oil Painting 1" style={{ width: '100%', height: 'auto' }} />
          <p>Description of the calligraphy goes here.</p>
        </div>
        <div style={styles.painting}>
          {/* Replace the image source with your actual image */}
          <img src={secart} alt="Oil Painting 2" style={{ width: '100%', height: 'auto' }} />
          <p>Description of another calligraphy goes here.</p>
        </div>
        {/* Add more paintings and descriptions as needed */}
      </div>
    </div>
  );
};

export default Calligraphy;
