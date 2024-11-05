import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate('/account'); // Redirect to My Account page
  };

  return (
    <div className="formContainer">
      <h2>Signup</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default Signup;
