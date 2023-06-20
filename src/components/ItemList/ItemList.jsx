import React, {useEffect, useState}from 'react';
//imports librerias extrernas

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
        .then(json => {
            const arrayRespuesta = json.products;
            if (categoryId.category !== undefined){
                // si tenemos que mostrar categoría, filtramos el array y seteamos el array filtrado
                const arrayFiltrado = arrayRespuesta.filter(producto => producto.category === categoryId.category)
                setProducts(arrayFiltrado)
            } else {
                // sino, seteamos el array entero
                setProducts(arrayRespuesta)
            }  
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, [categoryId]);
   

    return (
        <div className="cards-list margin05rem">
            {products.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} className="heigt40rem"/>)
            })}
        </div>
    )}

export default ItemList