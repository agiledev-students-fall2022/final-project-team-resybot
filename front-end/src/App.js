import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MyBookings from'./MyBookings'
import './App.css';
import Layout from "./Layout";
import Login from "./Login"

const App = () => {
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
