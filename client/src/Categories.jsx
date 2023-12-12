// Categories.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Artwork Categories</h2>
      <div className="categories-list">
        <div className="category-dropdown">
          <button className="category-button">Categories</button>
          <div className="dropdown-content">
            <Link to="/categories/oil-paintings">Oil Paintings</Link>
            <Link to="/categories/sketches">Sketches</Link>
            <Link to="/categories/digital-paintings">Digital Paintings</Link>
            {/* Add more categories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
