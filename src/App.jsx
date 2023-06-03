import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Proyecto Ecommerce creado con VITE - Mensaje pasado por Prop: Requerimiento de CoderHouse"/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App;
