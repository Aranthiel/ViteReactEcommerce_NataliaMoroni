//rafce tab >> comando  snipet de  ES7 react native snipet >> react arrow function export component
//imports React
import {useContext} from 'react';
//imports librerias extrernas
import { Link } from 'react-router-dom';
//imports propios
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
  const { cartItems } = useContext(CartContext); // Obtén el estado cartItems del contexto

  return (
    <div className="shopBasket">
      <Link to="/cart" title="Canasto" className="basketIcon" id="shopBasket" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket-fill basketIcon" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
        </svg>
        <span className="hiddenInfo"> Tenés {cartItems.length} productos en tu canasto</span>
        <span className="basketCounter">{cartItems.length} </span>
      </Link>
    </div>
  )
}

export default CartWidget