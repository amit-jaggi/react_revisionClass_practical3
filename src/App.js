import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={ <Home />}/>
          <Route path="/about" element={ <About />}/>
          <Route path="/contact" element={ <Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
