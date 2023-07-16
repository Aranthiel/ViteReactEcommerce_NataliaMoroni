import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartCotext';

const CartDetailPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleFinalizePurchase = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
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
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>Precio: {item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={handleClearCart}>Vaciar carrito</button>
          <button onClick={handleFinalizePurchase}>Finalizar compra</button>
        </div>
      )}

      <Link to="/">Seguir comprando</Link>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Tu compra fue realizada con éxito</h2>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetailPage;