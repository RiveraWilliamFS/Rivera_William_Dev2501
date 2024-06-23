import React from 'react';
import imageUrl from '../images/icons8-iron-man-16.png'

const PostCard = ({ avatar, title, description, image, onDelete, onEdit, style }) => {
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt="Post" />
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default PostCard;


const styles = {
  card: {
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



