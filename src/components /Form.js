import React from 'react';

const Form = () => {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="What's on your Mind?" style={styles.input} />
      <textarea placeholder="Describe it" style={styles.textarea}></textarea>
      <button type="submit" style={styles.button}>Post</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    width: '20%',
    margin: '0 auto', 
    marginRight: '30%',
    minHeight: '300px'
    
  },
  input: {
    padding: '40px',
    fontSize: '1em',
  },
  textarea: {
    padding: '30px',
    fontSize: '1em', 
  },
  button: {
    padding: '10px',
    fontSize: '1em',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Form;
