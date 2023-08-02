import React from 'react';
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Company Logo</div>
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">Explore</li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-avatar">Avatar</div>
    </nav>
  );
};

export default NavBar;
