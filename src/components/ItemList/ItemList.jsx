import React, {useEffect, useState}from 'react';
//imports librerias extrernas
import { Link } from 'react-router-dom';
//imports propios
import "./ItemList.css"
import ProductCard from "../ProductCard/ProductCard";


//const API_URL = "https://rickandmortyapi.com/api/character";
const API_URL = "https://dummyjson.com/products";

const ItemList = (categoryId) => { 
    const [products, setProducts]= useState([]);
    useEffect(()=> {
        fetch(API_URL)
        .then(response => response.json())
        .then(json => setProducts(json.products))
    }, [categoryId]);
    
    return (
        <div className="cards-list margin05rem">
            {products.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} className="heigt40rem"/>)
            })}
        </div>
    )

}

export default ItemList