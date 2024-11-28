import React from 'react';
import CheckoutHeader from './CheckoutHeader';
import CheckoutForm from './CheckoutForm';
import CheckoutFooter from './CheckoutFooter';

function CheckoutPage() {
  return (
    <div style={styles.container}>
      <CheckoutHeader />
      <CheckoutForm />
      <CheckoutFooter />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
};

export default CheckoutPage;
