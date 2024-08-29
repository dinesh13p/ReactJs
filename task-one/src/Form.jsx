import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${userData.name}\nAge: ${userData.age}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={userData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password"
        >
          {showPassword ? '❌' : '✔️'}
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
