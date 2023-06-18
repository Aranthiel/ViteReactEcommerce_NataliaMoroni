import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar />    
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/About"  element={<AboutPage />} />
            <Route path="/Contact"  element={<ContactPage />} />
            <Route path="*"  element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>      
      </Router>
  );
}

export default App;
