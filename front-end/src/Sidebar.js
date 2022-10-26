import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        My Bookings
      </a>
      {/* <a className="menu-item" href="/requests">
        Requests
      </a> */}
      <Link to="/requests">Requests</Link>

      {/* <a className="menu-item" href="/makerequest">
        Make Request
      </a> */}
      <Link to="/makerequest">Make Request</Link>
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