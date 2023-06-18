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
    console.log("categoryId", categoryId)
    
    useEffect(()=> {
        fetch(API_URL)
        .then(response => response.json())
        .then(json => {setProducts(json.products)})
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);
    console.log("products", products);
    const fitrados = products.filter(producto => producto.category === categoryId.value);    
    console.log("fitrados", fitrados) //¿por que esto no funciona?
    const filteredProducts = products.filter(producto => producto.category === 'smartphones');
    console.log("filteredProducts", filteredProducts) ; // y esto si?

    return (
        <div className="cards-list margin05rem">
            {products.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} className="heigt40rem"/>)
            })}
        </div>
    )}

export default ItemList