import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Marvel from "../images/mateusz-waclawek-t2b2svMf8ek-unsplash.jpg"

const PostCard = (props) => {
  return (
    <div style={styles.card}>
      <img src={props.avatar} alt="Avatar" style={styles.avatar} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div style={styles.actions}>
        <FaEdit />
        <FaTrash />
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    width: '500px', 
    height: '300px', 
    margin: '0 auto',
    boxSizing: 'border-box', 
  },
  avatar: {
    width: '50px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
};

export default PostCard;

