import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';
import {Button} from 'reactstrap'
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("user")
    localStorage.removeItem("resyUser")
    navigate("/login")
    
  }
  return (
    <Menu>
      <a className="menu-item" href="/">
        My Bookings
      </a>
      <a className="menu-item" href="/requests">
        Requests
      </a>  
      <a className="menu-item" href="/SearchRestaurant">
        Make Request
      </a>
      <a className="menu-item" href="/settings">
        Settings
      </a>
      <a className="menu-item" href="/contactus">
        Contact Us
      </a>
      <Button className = "logoutButton" onClick = {logout}>
        Log Out
      </Button>
    </Menu>
  );
};
export default Sidebar