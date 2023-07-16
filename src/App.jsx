import './App.css';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Booststrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SearchProducts from './components/SearchProducts/SearchProducts';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import CartDetailPage from './pages/CartDetailPage';

//context
import { ItemsProvider } from './context/ItemsContext';
import { CartProvider } from './context/CartCotext';


function App() {
  return (    
      <ItemsProvider><CartProvider>
        <Router>
        <div className="App">
          <Navbar /> 
          <SearchProducts />
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/category/:categoryId"  element={<ItemListContainer />} />
            <Route path="/About"  element={<AboutPage />} />
            <Route path="/Contact"  element={<ContactPage />} />
            <Route path="/item/:id"  element={<DetailPage />} />
            <Route path="/cart"  element={<CartDetailPage />} />
            <Route path="*"  element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>      
      </Router>
      </CartProvider></ItemsProvider>
  );
}

export default App;
