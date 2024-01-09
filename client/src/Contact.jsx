// ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  const styles = {
    body: {
      margin: 0,
      padding: '18%',
      fontFamily: 'Courier New, sans-serif',
      background: '#111', // Dark background color
      color: '#fff', // Text color
    },
    container: {
      width: '80%',
      margin: '0 auto',
      textAlign: 'center',
      paddingTop: '50px',
    },
    email: {
      fontSize: '24px',
      margin: '20px 0',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Contact Us</h2>
        <p style={styles.email}>In case of any complaints and queries, contact us at:</p>
        <p style={styles.email}>faarharaza@yahoo.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
