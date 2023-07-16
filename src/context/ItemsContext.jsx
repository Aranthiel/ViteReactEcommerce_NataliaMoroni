import { useState, useEffect, createContext } from "react";

export const ItemsContext=createContext()

const API_URL = "https://dummyjson.com/products";


// eslint-disable-next-line react/prop-types
export const ItemsProvider = ({children}) =>{
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(API_URL)
        .then((response)=>response.json())
        .then((data)=> setItems(data.products))
        .catch((error)=>console.log(error));
    }, [])
    return (<ItemsContext.Provider value={{items}}>{children}</ItemsContext.Provider>)
}