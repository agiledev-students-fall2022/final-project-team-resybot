import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import Home from'./Home'
import './App.css';

const App = () => {
  return (
   <div className = "App">
    <Router> 
        <div>
          <Header />
        </div>
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
