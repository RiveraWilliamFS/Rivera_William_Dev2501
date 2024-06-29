import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/newsfeed" style={styles.button}>Newsfeed</Link>
        </li>
        <li style={styles.li}>
          <Link to="/messages" style={styles.button}>Messages</Link>
        </li>
        <li style={styles.li}>
          <Link to="/watch" style={styles.button}>Watch</Link>
        </li>
        <li style={styles.li}>
          <Link to="/dashboard" style={styles.button}>Dashboard</Link>
        </li>
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
  li: {
    margin: '5px 0'
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
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
};

export default Navigation;
