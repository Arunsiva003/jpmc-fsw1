import { useState, useEffect } from 'react';

const useUserId = () => {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    // Retrieve userId from localStorage on component mount
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const setStoredUserId = (userId) => {
    // Store userId in localStorage
    localStorage.setItem('userId', userId);
    setUserId(userId);
  };

  const clearStoredUserId = () => {
    // Clear userId from localStorage
    localStorage.removeItem('userId');
    setUserId(null);
  };

  return { userId, setStoredUserId, clearStoredUserId };
};

export default useUserId;
