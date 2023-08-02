import React from 'react';
import "./SideBar.css"
const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-tabs">
        <li className="sidebar-tab">Recently Viewed</li>
        <li className="sidebar-tab">Inbox</li>
        <li className="sidebar-tab">Registered Events</li>
        <li className="sidebar-tab">My Wishlist</li>
        <li className="sidebar-tab">Completed Events</li>
      </ul>
    </aside>
  );
};

export default SideBar;
