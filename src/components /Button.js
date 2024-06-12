import React from 'react';

const Button = (props) => {
  return (
    <button style={styles.redBtn}>
      {props.btnText}
    </button>
  );
}

const styles = {
  redBtn: {
    fontWeight: 'bold',
    backgroundColor: 'rgb(143, 202, 249)',
    color: '#0066CC',
    padding: '1%',
    margin: '1%',
    borderRadius: '10%',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Button;
