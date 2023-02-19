import React from 'react'
import { useState, useEffect, useContext }  from "react";

import {RiStarLine, RiStarSFill} from 'react-icons/ri';



const Rating = () => {
    const [hoveredStarIndex, setHoveredStarIndex] = useState(null);


      const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(
              <RiStarSFill
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                color="currentColor"
              />
            );
          } else {
            stars.push(
              <RiStarLine
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                color="currentColor"
              />
            );
          }
        }
        if (hoveredStarIndex !== null) {
          for (let i = 0; i <= hoveredStarIndex; i++) {
            stars[i] = (
              <RiStarSFill
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                color="currentColor"
              />
            );
          }
        }
        return stars;
      };
      

    return (
        <div className="flex gap-x-2" style={{ alignItems: 'center' }}>
            <div className='flex text-customThird cursor-pointer'>{renderStars (stroll.rating)}</div>
            <p style={{ fontWeight: 'bold' }}>4.98</p>
        </div>
    )
}

export default Rating