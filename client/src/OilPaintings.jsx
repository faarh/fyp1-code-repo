// OilPaintings.js

import React, { useState } from 'react';

const famousOilPaintings = [
  { id: 1, name: 'Starry Night', imageUrl: 'url_to_image1.jpg' },
  { id: 2, name: 'Mona Lisa', imageUrl: 'url_to_image2.jpg' },
  // Add more famous oil paintings as needed
];

const OilPaintings = () => {
  const [randomPaintings, setRandomPaintings] = useState([]);

  const handleRandomPaintings = () => {
    const shuffledPaintings = shuffleArray(famousOilPaintings);
    setRandomPaintings(shuffledPaintings.slice(0, 3)); // Display 3 random paintings
  };
 
  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div>
      <h2>Oil Paintings</h2>
      <button onClick={handleRandomPaintings}>Show Random Paintings</button>

      {randomPaintings.length > 0 && (
        <div>
          <ul>
            {randomPaintings.map(painting => (
              <li key={painting.id}>
                <h4>{painting.name}</h4>
                <img src={painting.imageUrl} alt={painting.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    
      {/* Add */}
    </div>
  );
};

export default OilPaintings;
