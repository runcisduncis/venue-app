import React from 'react';
import './Slideshow.css';

const images = [
  '/img/laserdog.png',
  '/img/bumbu-terapija.png',
  '/img/pifpaf.png',
  '/img/gunsnlasers.png',
];

function Slideshow() {
  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div key={index} className="slide">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
