import React from 'react';

function CheckoutHeader() {
  return (
    <header style={styles.header}>
      <h1>Finalizar Compra</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
  },
};

export default CheckoutHeader;
