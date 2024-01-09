// ArtworkDetails.jsx
import React from 'react';

const ArtworkDetails = ({ artwork }) => {
  return (
    <div>
      <div style={{ float: 'left', marginRight: '20px' }}>
        <img src={artwork.image} alt={artwork.name} style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        <h2>The Eye</h2>
        <p><strong>Size:</strong> {artwork.size}</p>
        <p><strong>Product dimensions:</strong> {artwork.productDimensions}</p>
        <p><strong>Orientation:</strong> {artwork.orientation}</p>
        <p><strong>Shape:</strong> {artwork.shape}</p>
        <p><strong>Frame type:</strong> {artwork.frameType}</p>
        <p><strong>Product description:</strong></p>
        <p>{artwork.productDescription}</p>
      </div>
    </div>
  );
};

export default ArtworkDetails;
