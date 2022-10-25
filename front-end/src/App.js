import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MyBookings from'./MyBookings'
import Layout from "./Layout";
import Login from "./Login"
import Settings from './Settings';
import EditInformation from './EditInformation';

const App = () => {
  return (
   <div className = "App">
    <Router> 
          <Layout>
            <Routes>
              <Route path="/" element={<MyBookings />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/EditInformation" element={<EditInformation />} />
            </Routes>
          </Layout>
    </Router>
    </div>
  );
}

export default App;
