import React from 'react';

const FruitsList = () => {
  let fruits1 = ["apple", "banana"];
  let fruits2 = ["cherry", "orange"];

  // Merge both arrays
  let allFruits = [...fruits1, ...fruits2];

  return (
    <div>
      <h1>Slip 9</h1>
      <h2>Merged Fruits List</h2>
      <ul>
        {allFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
