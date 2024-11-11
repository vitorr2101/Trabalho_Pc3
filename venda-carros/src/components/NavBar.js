// components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <img src="logo.jpeg" alt="Logo" style={styles.logo} />
      <div style={styles.links}>
        <a href="/">Página Inicial</a>
        <a href="/contato">Contato</a>
      </div>
    </nav>
  );
}

const styles = { // objeto de estilos, usa css
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: { width: '150px', borderRadius: '80px', } ,
  links: { display: 'flex', gap: '20px' },
};

export default NavBar;
