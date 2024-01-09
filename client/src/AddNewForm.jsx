// AddArtworkForm.jsx
import React, { useState } from 'react';

const AddNewForm = ({ onArtworkSubmit }) => {
  const [artworkData, setArtworkData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onArtworkSubmit(artworkData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Artwork Name:</label>
      <input type="text" name="name" value={artworkData.name} onChange={handleInputChange} required />

      <label>Artwork Price:</label>
      <input type="number" name="price" value={artworkData.price} onChange={handleInputChange} required />

      <label>Artwork Description:</label>
      <textarea name="description" value={artworkData.description} onChange={handleInputChange} required />

      <label>Artwork Image :</label>
      <input type="file" accept="image/*"  value={artworkData.image} onChange={handleInputChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewForm;
