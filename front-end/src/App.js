import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import SignUp from "./SignUp"
import Settings from './Settings'
import Requests from './Requests'
import MakeRequest from './MakeRequest'
import mockData from './mockdata/requests.json'
import EditInformation from './EditInformation';
import {Box} from '@mui/material';
const App = () => {
  // for adding items to a cart
  const [cartItems, setCartItems] = useState([]);
  const showRequests = ({setCartItems, data}) => {
    let list = data.map((val) => 
      <div className="template" key={val.id}>
          <Box className="description">
            <div className = "itemControl"> Restaurant: <div className = "valueControl">{val.restaurant} </div></div>
            <div className = "itemControl"> Party Size: <div className = "valueControl">{val.party_size}</div></div>
            <div className = "itemControl"> Expiration Date: <div className = "valueControl">{val.expiration_date}</div></div>
          </Box>
      </div> 
    )
    setCartItems(list)
  };
  
  const fetchRequests = async ({setCartItems}) => {
      const response =  await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Request")
      const data = await response.json()
      showRequests({setCartItems,data})
  }

  
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path = "/editinformation" element = {<EditInformation/>}/>
              <Route path="/requests" element={<Requests cartItems = {cartItems} setCartItems = {setCartItems} fetchRequests = {fetchRequests}/>}/>
              <Route path="/makerequest" element={<MakeRequest fetchRequests = {fetchRequests} />}/>
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
