import React, {useEffect, useState}from 'react';
//imports librerias extrernas
//imports propios
import "./ItemList.css"
import ProductCard from "../ProductCard/ProductCard";
import ItemDetail from "../ItemDetail/ItemDetail"


//const API_URL = "https://rickandmortyapi.com/api/character";
const API_URL = "https://dummyjson.com/products";

const ItemList = () => {
    //const [personajes, setPersonajes]= useState([]);
    const [products, setProducts]= useState([]);
    //console.log("personajes antes fetch", personajes);
    console.log("products antes fetch", products);
    useEffect(()=> {
        fetch(API_URL)
        .then(response => response.json())
      //  .then(json => setPersonajes(json.results))
        .then(json => setProducts(json.products))
    }, [])
    //console.log("personajes despues fetch", personajes);
    console.log("products despues fetch", products);
    return (
        <div className="cards-list margin05rem">
            <h1>List Users</h1>
            {products.map((producto)=>{                
                return (
                <div className="margin05rem" key={producto.id}>
                    <ItemDetail item={producto} className="heigt40rem"/>
                </div>)
            })}
        </div>
    )

}

export default ItemList