import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Replace this with actual registration logic, e.g., API call to register the user
    // After successful registration, set isRegistered to true
    setIsRegistered(true);
  };

  return (
    <div className="Rcontainer">
      {isRegistered ? (
        <div className="registration-form">
          <h1>Registration Successful!</h1>
          <Link to="/">Go to Login</Link>
        </div>
      ) : (
        <div className="registration-form">
          <h1>Register</h1>
          <form>
            <div className="input-div">
              <label>Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>UserId:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Date of Birth:</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Phone No:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Address:</label>
              <input
                type="text"
                className="address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label>Password:</label>
              <input
                type="password"
                className="password" 
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

export default RegisterPage;










