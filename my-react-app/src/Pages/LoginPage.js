import "./App.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with actual login logic, e.g., API call to a server for authentication
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
      navigate("/student");
       // Redirect to the dashboard upon successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="Lcontainer">
      {isLoggedIn ? (
        <div className="login-form1">
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
