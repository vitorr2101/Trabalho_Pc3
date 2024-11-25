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
      <button onClick={handlePrev} style = {styles.botao_ant}> anterior </button>
      <img src={images[currentIndex]} alt="Carro" style={styles.image} />
      <button onClick={handleNext} style = {styles.botao_pro}> próxima </button>
    </div>
  );
}

const styles = {
  carousel: { display: 'flex', alignItems: 'center', gap: '10px' },
  image: { width: '600px', height: '400px',  objectFit: 'contain' },
  botao_ant: {borderRadius: '50px'},
  botao_pro: {borderRadius: '50px'},
};

export default ImageCarousel;
