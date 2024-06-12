import React, { Component } from 'react';
import Button from './components /Button';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Buttons:</h1>
        <div>
          <Button btnText="Post" />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '20px',
  }
};

export default App;



