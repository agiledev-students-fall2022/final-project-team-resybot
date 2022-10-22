import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
//import {useState} from "react"

const App = () => {

  /*
  // don't worry bout this stuff rn
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }
  // so we can see access the user info in other places
  const [user, setUser] =  useState({name: "", email: ""});
  //check if details are correct
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logoout = () =>{
    //change later
    console.log("Logout")
  } 
  */
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
