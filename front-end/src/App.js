import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import SignUp from "./SignUp"
//import {useState} from "react"
import Settings from './Settings';

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
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
