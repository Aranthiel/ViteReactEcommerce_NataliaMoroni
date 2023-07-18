import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./CartDetailPage.css"


const CartDetailPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  let total = 0;
 
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotal = () => {
    total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Carrito de compras</h1>

      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul >
          {cartItems.map((item) => (
            <li className="planeLi" key={item.id}>
              <div className="flexUl">
                <h3 className="nombre">{item.title}</h3>
                <p className="precio">Precio: {item.price}</p>
                <button className="btn btn-outline-secondary display-5 btn-floating m-1 btnEliminar" onClick={() => handleRemoveFromCart(item.id)}><FontAwesomeIcon icon="fa-trash-can" /></button>
                
                
                
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="btnContainer"> 
          <div className="finalizarCompra">
            <h2>Total: ${calculateTotal()}</h2>
            <Link to={`/confirmar/${total}`} ><button className="btnEliminar">Finalizar compra</button></Link>
          </div>
          <div className="seguirVaciar">
            <Link to="/"><button className="planeBtn"> Seguir Comprando</button></Link>
            <button className="planeBtn" onClick={handleClearCart}>Vaciar carrito</button>
            
          </div>
        </div>
      )}

      
    </div>
  );
};

export default CartDetailPage;