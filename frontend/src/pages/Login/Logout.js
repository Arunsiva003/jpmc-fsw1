import React, { useContext } from 'react';
// import { useUser } from '../../userContext';

const Logout = () => {
  // const { logout } = useUser();

  const handleLogout = () => {
    // logout();
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default Logout;
