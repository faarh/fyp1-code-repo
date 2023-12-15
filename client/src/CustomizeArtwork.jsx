// CustomizationForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/CustomizationForm.css'; // Import the CSS file

const CustomizationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [artworkDescription, setArtworkDescription] = useState('');
  const [referenceImage, setReferenceImage] = useState(null);
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');

  useEffect(() => {
    // Fetch the list of artists from the backend (assuming endpoint is available)
    axios.get('http://127.0.0.1:3001/users')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
      });
  }, []);

  const handleImageChange = (e) => {
    // Handle image upload and set the state
    const file = e.target.files[0];
    setReferenceImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to send customization data to the backend
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('artworkDescription', artworkDescription);
    formData.append('referenceImage', referenceImage);
    formData.append('selectedArtist', selectedArtist);

    axios.post('http://127.0.0.1:3001/customize-artwork', formData)
      .then(response => {
        console.log(response.data);
        // Handle success, e.g., show a success message or redirect the user
      })
      .catch(error => {
        console.error('Error submitting customization:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="customization-form-container">
      <h2 className="form-title">Artwork Customization Form</h2>
      <form onSubmit={handleSubmit} className="customization-form">
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Artwork Description:</label>
          <textarea value={artworkDescription} onChange={(e) => setArtworkDescription(e.target.value)} />
        </div>
        <div>
          <label>Reference Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>Select Artist:</label>
          <select value={selectedArtist} onChange={(e) => setSelectedArtist(e.target.value)}>
            <option value="" disabled>Select an artist</option>
            {artists.map(artist => (
              <option key={artist.id} value={artist.id}>{artist.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CustomizationForm;
