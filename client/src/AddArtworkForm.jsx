// AddArtworkForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import logo2 from './images/logo2.png';
import { Link } from 'react-router-dom';

const AddArtworkForm = ({ onArtworkSubmit }) => {
  const [artworkData, setArtworkData] = useState({
    name: '',
    price: '',
    description: '',
    image: null, // Store image data or file
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setArtworkData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleArtworkSubmission = () => {
    const formData = new FormData();
    formData.append('name', artworkData.name);
    formData.append('price', artworkData.price);
    formData.append('description', artworkData.description);
    formData.append('category', artworkData.category);
    formData.append('image', artworkData.image);
  
    axios.post('http://127.0.0.1:3001/addArtwork', formData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log(response.data);
        setSuccessMessage('Artwork posted successfully!');
        setShowMessage(true);
        // ... (rest of the existing logic)
      })
      .catch(error => {
        // Handle error, e.g., show an error message to the user
        console.log(error.response.data);
        //console.error('Error submitting artwork:', error);
      });

  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#111', // Dark background color
      color: '#fff', // Text color
    },
    form: {
      width: '400px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      background: '#222', // Dark form background color
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '8px 0',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      margin: '8px 0',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      background: '#4CAF50', // Green submit button color
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    successMessage: {
      color: 'green',
      marginTop: '10px',
    },
    h2: {
      color: 'white',
       // Set the color to white
    },
    label:{
      color:'white',
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
   <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.h2}>Add New Artwork</h2>
        <div>
          <label style={styles.label}>Name of the Artwork:</label>
          <input
            type="text"
            name="name"
            value={artworkData.name}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <div>
          <label style={styles.label}>Price:</label>
          <input
            type="text"
            name="price"
            value={artworkData.price}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <div>
        <label htmlFor="category" style={styles.label}>Category:</label>
        <select
          id="category"
          name="category"
          value={artworkData.category}
          onChange={handleInputChange}
        >
          <option value="Oil Painting">Oil Painting</option>
          <option value="Calligraphy">Calligraphy</option>
          <option value="Digital Painting">Digital Painting</option>
        </select>
      </div>

        <div>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={artworkData.description}
            onChange={handleInputChange}
            style={styles.textarea}
          />
        </div>

        <div>
          <label style={styles.label}>Artwork Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
        </div>

        <br />
        <button type="button" onClick={handleArtworkSubmission} style={styles.button}>
          Submit
        </button>
        {showMessage && <p style={styles.successMessage}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default AddArtworkForm;
