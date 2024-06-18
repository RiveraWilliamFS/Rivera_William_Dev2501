import React from 'react';

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><button style={styles.button}>News Feed</button></li>
        <li><button style={styles.button}>Messages</button></li>
        <li><button style={styles.button}>Watch</button></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: '150px',
    backgroundColor: 'red',
    padding: '40px',
    border: '2px solid #000',
    marginTop: '20px'
  },
  ul: {
    listStyle: 'none',
    padding: 0
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    padding: '10px', 
    fontSize: '1em',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none', 
    display: 'block', 
    textAlign: 'left', 
    margin: '5px 0', 
    width: '100%', 
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  }
};

export default Navigation;

