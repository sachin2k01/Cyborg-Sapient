import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Replace this with actual login logic, e.g., API call to a server for authentication
    if (username === "example" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="login-form">
          <h1>Welcome, {username}!</h1>
          <Link to="/">Go to Home</Link>
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

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Replace this with actual registration logic, e.g., API call to register the user
    // After successful registration, set isRegistered to true
    setIsRegistered(true);
  };

  return (
    <div className="container">
      {isRegistered ? (
        <div className="registration-form">
          <h1>Registration Successful!</h1>
          <Link to="/">Go to Login</Link>
        </div>
      ) : (
        <div className="registration-form">
          <h1>Register</h1>
          <form>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <label>Mobile Number:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            <button type="button" onClick={handleRegister}>
              Register
            </button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
