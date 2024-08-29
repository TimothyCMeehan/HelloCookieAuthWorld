// src/components/ProtectedPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProtectedPage = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');
        setUsername(response.data.username);
      } catch (err) {
        history.push('/login');
      }
    };

    fetchUser();
  }, [history]);

  return (
    <div>
      <h2>Hello {username}!</h2>
      <p>Welcome to the protected page.</p>
    </div>
  );
};

export default ProtectedPage;
