import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdCard from './components /Adcard';
import Button from './components /Button';
import Form from './components /Form';
import Header from './components /Header';
import Navigation from './components /Navigation';
import PostCard from './components /PostCard';
import Messages from './pages/Messages';
import Newsfeed from './pages/Newsfeed';
import Watch from './pages/Watch';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import DisplaySettings from './components /DisplaySettings';


const avatarIcon = '../images/icons8-iron-man-16.png'; 
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      paddingTop: '80px',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'red',
      marginTop: '100px',
    },
    main: {
      display: 'flex',
      flex: 2,
    },
    ads: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'right',
      paddingLeft: 20,
      paddingRight: 20,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
    post: {
      backgroundColor: 'white',
      color: 'black',
      transition: 'background-color 1s, color 1s',
    },
  };
  
  const App = () => {
    const [cards, setCards] = useState([
      { title: 'I am Groot@', subtitle: 'I am Groot!', image: 'https://unsplash.com/photos/black-and-brown-monster-illustration-3FA80_d8rHo' },
      { title: 'I am Groot', subtitle: 'I am Groot', image: 'https://unsplash.com/photos/black-and-brown-monster-illustration-3FA80_d8rHo' },
    ]);
  
    const [posts, setPosts] = useState([
      {
        avatar: avatarIcon,
        postName: 'Captain America VS Iron Man',
        postDescription: 'Been playing with my new Lego set. Created an Epic 1v1 Scene!',
        image: 'https://unsplash.com/photos/red-and-blue-robot-toy-t2b2svMf8ek',
      },
    ]);
  
    const [color, setColor] = useState({ backgroundColor: 'white', color: 'black' });
  
    useEffect(() => {
      setTimeout(() => {
        setColor({ backgroundColor: 'gray', color: 'white' });
      }, 3000);
    }, []);
  
    const addCard = (newCard) => {
      setCards([...cards, { id: cards.length + 1, ...newCard, style: styles.card }]);
    };
  
    const deleteCard = (id) => {
      setCards(cards.filter((card) => card.id !== id));
    };
  
    const addPost = (newPost) => {
      setPosts([...posts, newPost]);
    };
  
    const deletePost = (index) => {
      setPosts(posts.filter((_, i) => i !== index));
    };
  
    return (
      <Router>
        <div style={styles.container}>
          <Header logoText="My Logo" style={styles.header} />
          <div style={styles.content}>
            <Navigation />
            <div style={styles.content}>
              <section>
                <Routes>
                  <Route path="/" element={<Newsfeed />} />
                  <Route path="newsfeed" element={<Newsfeed />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="watch" element={<Watch />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="settings" element={<DisplaySettings />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </section>
              <Form addPost={addPost} />
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  avatar={post.avatar}
                  title={post.postName}
                  description={post.postDescription}
                  image={post.image}
                  onDelete={() => deletePost(index)}
                  style={{ ...styles.post, ...color }}
                />
              ))}
            </div>
          </div>
          <div style={styles.ads}>
            {cards.map((card) => (
              <AdCard
                key={card.id}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                onDelete={() => deleteCard(card.id)}
                style={card.style}
              />
            ))}
            <Button onClick={() => addCard({ title: 'New Card', subtitle: 'New Subtitle', image: 'https://unsplash.com/photos/new-image' })}>
              Add Card
            </Button>
          </div>
        </div>
      </Router>
    );
  };
  
  export default App;