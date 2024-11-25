// components/ProductDetails.js
import React from 'react';
import ImageCarousel from './ImageCarousel';
import Description from './Description';

function ProductDetails() {
  return (
    <div>
    <div style={styles.container}>
      <div style={styles.details}>
        <h1 style={styles.title}>Mustang Shelby GT350 - 1965</h1>
        <ImageCarousel images={['Mustang-GT350.jpg', 'Mustang-GT350-side.jpg', 'Mustang-GT350-back.png']} />
      </div>
      <div style={styles.sideInfo}>
        <h2 style={styles.price}>R$ 8.000.000,00</h2>
        <button style={styles.buyButton}>Comprar</button>
      </div>
    </div>

    <div style = {styles.container_desc}>
    
      <div style = {styles.textDescription}>
      <Description text="Originado nas fábricas da Ford, este modelo lendário foi direto para a oficina do 
      grande Carroll Shelby, um preparador de carros bem conhecido no meio. Lá ele ficou por seis meses até
      virar um carro de corrida. Este é um raro exemplar das 34 unidades produzidas em todo o mundo." />
      </div>
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    maxWidth: 'clamp(300px, 80%, 1200px)',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto', // Centraliza horizontalmente
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Ajustado para preencher o contêiner
    textAlign: 'center',
  },
  sideInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginLeft: '20px',
  },
  title: { fontSize: '1.5em', marginBottom: '10px' },
  price: { fontSize: '1.2em', color: 'green' },
  buyButton: { padding: '10px 20px', fontSize: '1em', marginTop: '10px' },

  container_desc: {
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Alinha o conteúdo horizontalmente
    flexDirection: 'column',
    margin: '0 auto', // Centraliza horizontalmente
  },
  textDescription: {

    fontSize: '18px',
    textAlign: 'justify',
  },
};


export default ProductDetails;
