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
        .then(json => {setProducts(json.products)})
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);
    console.log("categoryId",categoryId)
    
    const filtrados = products.filter(producto => producto.category === categoryId.category);  
    console.log("products",products)
    console.log("filtrados", filtrados)
    let iaestoyharta=[];

    if (categoryId.category !== undefined){
        console.log("categoryId tiene valor y deberian renderizarse SOLAMENTE los  productos de la categoria");
        iaestoyharta=[].concat(filtrados)
        
    } else {
        console.log("categoryId NO  tiene valor y deberian renderizarse TODOS los productos");
        iaestoyharta=[].concat(products)
    }
    console.log("iaestoyharta", iaestoyharta)

    return (
        <div className="cards-list margin05rem">
            {iaestoyharta.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} className="heigt40rem"/>)
            })}
        </div>
    )}

export default ItemList