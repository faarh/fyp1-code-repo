// AddArtworkForm.jsx
import React, { useState } from 'react';

const AddArtworkForm = () => {
  const [artworkData, setArtworkData] = useState({
    name: '',
    pricingType: 'fixed', // or 'bidding'
    price: '',
    startingBid: '',
    bidEndTime: '',
    description: '',
    artistName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArtworkSubmission = () => {
    console.log('Artwork data submitted:', artworkData);
    // You can add logic here to submit the artwork data
  };

  return (
    <div>
      <h2>Add New Artwork</h2>
      <form>
      <label>Name of the Artwork:</label>
            <input
              type="text"
              name="name"
              value={artworkData.name}
              onChange={handleInputChange}
            />
            <br />

            <label>Pricing Type:</label>
            <select
              name="pricingType"
              value={artworkData.pricingType}
              onChange={handleInputChange}
            >
              <option value="fixed">Fixed Price</option>
              <option value="bidding">Bidding</option>
            </select>
            <br />

            {artworkData.pricingType === 'fixed' && (
              <div>
                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={artworkData.price}
                  onChange={handleInputChange}
                />
                <br />
              </div>
            )}

            {artworkData.pricingType === 'bidding' && (
              <div>
                <label>Starting Bid:</label>
                <input
                  type="text"
                  name="startingBid"
                  value={artworkData.startingBid}
                  onChange={handleInputChange}
                />
                <br />

                <label>Bid End Time:</label>
                <input
                  type="text"
                  name="bidEndTime"
                  value={artworkData.bidEndTime}
                  onChange={handleInputChange}
                />
                <br />
              </div>
            )}

            <label>Description:</label>
            <textarea
              name="description"
              value={artworkData.description}
              onChange={handleInputChange}
            />
            <br />

            <label>Artist Name:</label>
            <input
              type="text"
              name="artistName"
              value={artworkData.artistName}
              onChange={handleInputChange}
            />
            <br />

        <button type="button" onClick={handleArtworkSubmission}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArtworkForm;
