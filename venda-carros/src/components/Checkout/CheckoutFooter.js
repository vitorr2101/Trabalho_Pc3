import React from 'react';

function CheckoutFooter() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Venda Carros. Todos os direitos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    marginTop: '20px',
  },
};

export default CheckoutFooter;
