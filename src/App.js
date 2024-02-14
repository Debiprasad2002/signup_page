
import React, { useState } from 'react';
import './App.css';

function App() {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Send registerFormData to backend for registration
    console.log('Registration form data:', registerFormData);
    alert('Sign up successful! Please login.');
    setShowLoginForm(true);
    // Optionally, reset the form fields
    setRegisterFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Send loginFormData to backend for login
    console.log('Login form data:', loginFormData);
    alert('Welcome to this page!');
    // Optionally, reset the form fields
    setLoginFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="App">
      {!showLoginForm ? (
        <>
          <h1>Registration Form</h1>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={registerFormData.username}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerFormData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerFormData.password}
              onChange={handleRegisterChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </>
      ) : (
        <>
          <h1>Login Form</h1>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginFormData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
