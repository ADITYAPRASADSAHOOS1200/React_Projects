import React, { useState } from 'react';
import './Stars.css';
import { FaStar } from 'react-icons/fa'

export default function Stars({ noofstars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className='star-rating'>
      {[...Array(noofstars)].map((_, index) => {
         index +=1;

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
            color={index <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
          />
        );
      })}
      <p>{rating} star(s) selected</p>
    </div>
  );
}


  
  