// components/Description.js
import React from 'react';

function Description({ text }) {
  return (
    <div style={styles.container}>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', padding: '10px', textAlign: 'justify' },
};

export default Description;
