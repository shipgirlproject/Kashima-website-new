import React, { useEffect, useState } from 'react';

const StarrySky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 500 }).map(() => {
      const size = Math.random() * 0.1 + 0.17;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      return {
        size,
        left,
        top,
        opacity: Math.random() * 0.4 + 0.3,
      };
    });

    setStars(generatedStars);

    const intervalId = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: Math.random() * 1, 
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-b from-black to-[#000033] overflow-hidden"
      style={{ perspective: '120rem' }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}vw`,
            top: `${star.top}vh`,
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
