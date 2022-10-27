import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import SignUp from "./SignUp"
//import {useState} from "react"
import Settings from './Settings'
import Requests from './Requests'
import MakeRequest from './MakeRequest'
import StandaloneRequest from './StandaloneRequest'
import mockData from './mockdata/requests.json'

const App = () => {
  // for adding items to a cart
  const [cartItems, setCartItems] = useState([]);
  

  
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/requests" element={<Requests cartItems = {cartItems}/>}/>
              <Route path="/makerequest" element={<MakeRequest cartItems = {cartItems} setCartItems = {setCartItems}/>}/>
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
