import Header from './Header';
import Footer from './Footer'
import './App.css';

const App = () => {
  return (
   <div className = "App">
    <div>
      <Header />
    </div>
    <div>
      BODY Of EACH PAGE
    </div>
    <div>
      <Footer />
    </div>
   </div>
  );
}

export default App;
