import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { useUser } from '../../userContext';
import useUserId from "../../useUserId";
import { AuthContext } from '../../App';
import './Login.css';


const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { userId } = useUserId();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log(userId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("submittng")
      const response = await axios.post('http://localhost:8080/login', { username, password });
      localStorage.setItem('token', response.data.token); // Store the token
      setError('');
      console.log(response.data.userId);
      console.log("submited")
      login(response.data.userId);
      window.location.href = '/admin';
        
      alert('Login successful');

      // Redirect or update state to reflect successful login
    } catch (err) {
        alert("invalid credentials")
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
