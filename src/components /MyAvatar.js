import React from 'react';

const MyAvatar = (props) => {
  return (
    <img src={props.src} alt="Avatar" style={styles.avatar} />
  );
}

const styles = {
  avatar: {
    width: '50px',
    borderRadius: '50%'
  }
};

export default MyAvatar;
