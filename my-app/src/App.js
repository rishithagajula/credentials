import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MyAccount from './MyAccount';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Link to="/account">
          <button>My Account</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>

        <Routes>
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
