import React from "react";

import './Svg.css';

const Svg = () => {
  return (
    <>
      <svg  className="space-background absolute w-full h-full object-cover z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        {/* Background */}
        <rect width="100%" height="100%" fill="#0a0a0a" />

        {/* Stars */}
        <g id="stars">
          {/* Add more star elements as needed */}
          <circle className="star" cx="100" cy="150" r="1" />
          <circle className="star" cx="500" cy="300" r="1.5" />
          <circle className="star" cx="800" cy="100" r="2" />
          {/* ... */}
        </g>

        {/* Planets */}
        <g id="planets">
          {/* Add more planet elements as needed */}
          <circle className="planet" cx="1500" cy="800" r="50" />
          {/* ... */}
        </g>
      </svg>
    </>
  );
};

export default Svg;