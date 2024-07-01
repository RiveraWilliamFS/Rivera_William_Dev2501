import React, { useState, useEffect } from 'react';
import SettingsDisplay from '../components /DisplaySettings';

function Settings() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      try {
        console.log('Fetching user data...');
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        const [user] = data.results;
        setUserData(user);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setLoading(false);
      }
    }
    fetchAPI();
  }, []);

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Settings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <SettingsDisplay
          avatar={userData.picture.large}
          fName={userData.name.first}
          lName={userData.name.last}
          street={`${userData.location.street.number} ${userData.location.street.name}`}
          city={userData.location.city}
          state={userData.location.state}
          zipcode={userData.location.postcode}
          email={userData.email}
          phone={userData.phone}
        />
      ) : (
        <p>No user data available</p>
      )}
    </section>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
};

export default Settings;
