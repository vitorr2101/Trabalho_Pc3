// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <img src="logo.jpeg" alt="Logo" style={styles.logo} />
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Página Inicial</Link></li>
        <li><Link to="/checkout" style={styles.link}>Finalizar Compra</Link></li>
      </ul>
    </nav>
  );
}

const styles = { // objeto de estilos, usa css
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '30px',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: { width: '150px', borderRadius: '80px', } ,
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default NavBar;
