import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/account'); 
  };

  return (
    <div className="formContainer">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
