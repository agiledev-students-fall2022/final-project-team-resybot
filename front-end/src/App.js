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
import SearchRestaurant from './SearchRestaurant';
import EditInformation from './EditInformation';
import ContactUs from './ContactUs';

const App = () => {

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
              <Route path="/requests" element={<Requests/>}/>
              <Route path="/makerequest" element={<MakeRequest />}/>
              <Route path="/SearchRestaurant" element={<SearchRestaurant />} />
              <Route path="/contactus" element={<ContactUs />}/>
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
