import React, { useEffect, useState } from 'react';

const StarrySky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const generatedStars = Array.from({ length: 500 }).map(() => {
        const size = Math.random() * 0.15 + 0.2; 
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.3;

        return {
          size,
          left,
          top,
          opacity,
        };
      });

      setStars(generatedStars);
    };

    generateStars(); 

    const intervalId = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: Math.random() * 0.6 + 0.4,
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);  
  }, []);

  return (
    <div
      className="absolute inset-0 bg-gradient-to-b from-black to-[#000033] overflow-hidden z-0"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,   
            top: `${star.top}%`,    
            width: `${star.size}rem`,
            height: `${star.size}rem`,
            opacity: star.opacity,
            transition: 'opacity 1s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarrySky;
