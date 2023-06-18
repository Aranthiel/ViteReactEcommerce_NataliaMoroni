import React, {useEffect, useState}from 'react';
//imports librerias extrernas
import { Link } from 'react-router-dom';
//imports propios
import "./ItemList.css"
import ProductCard from "../ProductCard/ProductCard";


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
    <Link className="margin05rem" key={producto.id} to={`item/${producto.id}`}>
        <ProductCard item={producto} className="heigt40rem"/>
    </Link>)
            })}
        </div>
    )

}

export default ItemList