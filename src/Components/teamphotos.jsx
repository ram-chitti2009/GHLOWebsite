import React, { useState } from 'react';

function Photos(props) {
  const [flipped, setFlipped] = useState(false); // manages flipping state

 

  // Define the classes based on the flipped state
  const cardClass =
    "transition-transform duration-500 w-full h-full transform-style-preserve-3d" +
    (flipped ? " rotate-y-180" : ""); // Add rotate if flipped is true

  return (
    <div
      className="relative w-full h-64 cursor-pointer perspective"
      onMouseEnter={() => setFlipped(true)} // Flip on hover
      onMouseLeave={() => setFlipped(false)} // Unflip when hover ends
    >
      <div className={cardClass}>
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex flex-col items-center justify-center">
          <img src={props.img} alt={props.name} className="w-20 h-20 rounded-full mb-4" />
          <h2 className="font-bold">{props.name}</h2>
          <p className="text-sm">{props.role}</p>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-blue-500 rounded-xl shadow-lg flex items-center justify-center rotate-y-180">
          <span className="text-white text-lg font-semibold">{props.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Photos;