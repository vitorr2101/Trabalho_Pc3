// components/ImageCarousel.js
import React, { useState } from 'react';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.carousel}>
      <button onClick={handlePrev}>Anterior</button>
      <img src={images[currentIndex]} alt="Carro" style={styles.image} />
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
}

const styles = {
  carousel: { display: 'flex', alignItems: 'center', gap: '10px' },
  image: { width: '600px', height: 'auto' },
};

export default ImageCarousel;
