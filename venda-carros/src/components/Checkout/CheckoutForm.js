import React from 'react';

function CheckoutForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compra finalizada com sucesso!');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        Nome:
        <input type="text" name="name" style={styles.input} required />
      </label>
      <label style={styles.label}>
        CPF:
        <input type="text" name="cpf" style={styles.input} required />
      </label>
      <label style={styles.label}>
        Endereço:
        <input type="text" name="address" style={styles.input} required />
      </label>
      <button type="submit" style={styles.submitButton}>Finalizar Compra</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CheckoutForm;
