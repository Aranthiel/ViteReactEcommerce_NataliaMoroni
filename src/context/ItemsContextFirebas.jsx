import { useState, useEffect, createContext } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "products")); // consulta la colección "products" en Firestore
      console.log("q", q);
      const docs = [];
      const querySnapshot = await getDocs(q); // obtiene los documentos de la consulta
      querySnapshot.forEach((doc) => {        
        docs.push({ ...doc.data(), docId: doc.id });
      });
      console.log("docs", docs);
      setItems(docs); // actualiza el estado con los documentos obtenidos      
    };
    getItems();
  }, []);
  console.log("items  ", items)

  return (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
  );
};
