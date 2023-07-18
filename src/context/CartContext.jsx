import { createContext, useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Importa la configuración de tu instancia de Firebase


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        const saveCartToLocalStorage = () => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        };

        saveCartToLocalStorage();
    }, [cartItems]);


    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== productId)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const saveToFirebase = async (email, customerName, total) => {
        try {
            const docRef = doc(db, 'orders', email);
            await setDoc(docRef, {
                customerName,
                email,                
                total,
            });
            console.log('Datos guardados en Firebase correctamente.');
        } catch (error) {
            console.error('Error al guardar los datos en Firebase:', error);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                saveToFirebase,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
