import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage'


function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar />    
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/category/:categoryId"  element={<ItemListContainer />} />
            <Route path="/About"  element={<AboutPage />} />
            <Route path="/Contact"  element={<ContactPage />} />
            <Route path="/item/:id"  element={<DetailPage />} />
            <Route path="*"  element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>      
      </Router>
  );
}

export default App;
