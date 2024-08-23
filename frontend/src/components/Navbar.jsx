// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Project Showcase</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addproject">Add a New Project</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
