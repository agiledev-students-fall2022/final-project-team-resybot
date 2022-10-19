import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/mybookings">
        My Bookings
      </a>
      <a className="menu-item" href="/requests">
        Requests
      </a>
      <a className="menu-item" href="/settings">
        Settings
      </a>
      <a className="menu-item" href="/contactus">
        Contact Us
      </a>
    </Menu>
  );
};
export default Sidebar