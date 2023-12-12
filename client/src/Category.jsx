// Category.js

import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ name }) => {
  return (
    <div className="category-item">
      <Link to={`/categories/${name.toLowerCase()}`}>
        {name}
      </Link>
    </div>
  );
};

export default Category;
