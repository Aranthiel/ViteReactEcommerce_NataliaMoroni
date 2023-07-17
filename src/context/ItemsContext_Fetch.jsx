import { useState, useEffect, createContext } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const API_URL = "https://dummyjson.com/products";
        const response = await fetch(API_URL);
        const data = await response.json();
        setItems(data.products);
      } catch (error) {
        console.log("Error al obtener los items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
  );
};
