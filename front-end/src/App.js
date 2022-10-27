import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import Settings from './Settings'
import Requests from './Requests'
import MakeRequest from './MakeRequest'
import SearchRestaurant from './SearchRestaurant';
import StandaloneRequest from './StandaloneRequest'
import mockData from './mockdata/requests.json'
import EditInformation from './EditInformation';

const App = () => {
  // for adding items to a cart
  const [cartItems, setCartItems] = useState([]);
  

  
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/EditInformation" element={<EditInformation />} />
              <Route path="/requests" element={<Requests cartItems = {cartItems}/>}/>
              <Route path="/makerequest" element={<MakeRequest cartItems = {cartItems} setCartItems = {setCartItems}/>}/>
              <Route path="/SearchRestaurant" element={<SearchRestaurant />} />
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
