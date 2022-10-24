import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import Settings from './Settings';

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
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
