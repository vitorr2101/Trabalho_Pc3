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
  container: { maxWidth: 'auto', paddingLeft: '30px', paddingRight: '30px', textAlign: 'justify', fontSize :'20px' },
};

export default Description;
