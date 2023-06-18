import React, {useEffect, useState}from 'react';
//imports librerias extrernas
//imports propios
import "./ItemList.css"
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard"


const API_URL = "https://rickandmortyapi.com/api";

const ItemList = () => {
    const [chars, setChars]= useState([]);
    useEffect(()=> {
        fetch(API_URL)
      .then(response => response.json())
      .then(json => console.log(json))
    }, [])
    return (
        <div>
            <h1>List Users</h1>
        </div>
    )

}

export default ItemList