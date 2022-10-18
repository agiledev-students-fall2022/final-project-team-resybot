import Header from './Header';
import Footer from './Footer'
import './App.css';
import SideBar from "./Sidebar";

const App = () => {
  return (
   <div className = "App" id="outer-container">
      <SideBar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div>
          <Header />
        </div>
        <div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
