import React, { useState } from 'react';
import Button from './Button';

const Form = ({ addPost }) => {
  const [postName, setPostName] = useState('');
  const [postDescription, setPostDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      avatar: '../images/icons8-iron-man-16.png', 
      postName,
      postDescription,
      image: 'https://unsplash.com/photos/default-image' 
    };
    addPost(newPost);
    setPostName('');
    setPostDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <input
        type="text"
        placeholder="What's on your Mind?"
        style={styles.input}
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
      />
      <textarea
        placeholder="Describe it"
        style={styles.textarea}
        value={postDescription}
        onChange={(e) => setPostDescription(e.target.value)}
      ></textarea>
      <button type="submit" style={styles.button}>Post</button>
    </form>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    width: '500px',
    height: '300px',
    margin: '0 auto',
    marginRight: '30%',
    minHeight: '300px'
  },
  input: {
    padding: '10px',
    fontSize: '1em',
  },
  textarea: {
    padding: '10px',
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
