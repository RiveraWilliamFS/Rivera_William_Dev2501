import React, {Component} from 'react';
import AdCard from './components /Adcard';
import Button from './components /Button';
import Form from './components /Form';
import Header from './components /Header';
import MyAvatar from './components /MyAvatar';
import Navigation from './components /Navigation';
import PostCard from './components /PostCard';

const avatarIcon = 'path/to/avatarIcon.png';

const styles = {
container: {
display: 'flex',
flexDirection: 'column',
height: '100vh', 
paddingTop: '80px'
},
nav: {
display: 'flex',
flexDirection: 'column',
backgroundColor: 'red',
marginTop: '100px'
},
main: {
display: 'flex',
flex: 2

},
ads: {
display: 'flex',
flexDirection: 'column',
alignItems: 'right',
paddingLeft: 20,
paddingRight: 20,

}
};

const App = () => {
return (
<div style={styles.container}>
<Header logoText="My Logo" style={styles.header} />
<div style={styles.content}>
<Navigation />
<div style={styles.content}>
<Form />
<PostCard avatar={avatarIcon} title="Captain America VS Iron Man" description="Been playing with my new Lego set. Created an Epic 1v1 Scene!" image="https://unsplash.com/photos/red-and-blue-robot-toy-t2b2svMf8ek"/>
</div>
</div>
<div style={styles.ads}>
<AdCard image="https://unsplash.com/photos/black-and-brown-monster-illustration-3FA80_d8rHo" title="I am Groot" subtitle="I am Groot" />
<AdCard image="https://unsplash.com/photos/black-and-brown-monster-illustration-3FA80_d8rHo" title="I am Groot" subtitle="I am Groot" />
</div>
</div>
);
}

export default App;