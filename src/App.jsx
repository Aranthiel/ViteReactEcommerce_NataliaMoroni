import './App.css';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Booststrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrashCan)

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SearchProducts from './components/SearchProducts/SearchProducts';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/ProductDetailPage';
import CartDetailPage from './pages/CartDetailPage/CartDetailPage';
import Checkout from "./components/Checkout/Checkout.jsx"

//context
import { ItemsProvider } from './context/ItemsContextFirebas';
import { CartProvider } from './context/CartContext';


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
            <Route path="/confirmar/:total"  element={<Checkout />} />
            <Route path="*"  element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>      
      </Router>
      </CartProvider></ItemsProvider>
  );
}

export default App;
