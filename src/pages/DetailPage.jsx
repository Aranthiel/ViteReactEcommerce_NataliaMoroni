import React, {useEffect, useState}from 'react';
//imports librerias extrernas
import {  useParams} from 'react-router-dom';
//imports propios
import ItemDetail from "../components/ItemDetail/ItemDetail"


//const API_URL = `https://dummyjson.com/products/${id}`;

const DetailPage = () => { 
    const [product, setProduct]= useState({});
    let {id}=useParams();

    console.log(" DetailPage product antes fetch", product);
    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(json => setProduct(json))
    }, [id])
    console.log(" DetailPage product despues fetch", product);

     
    return (
        <div style={{display:"flex", justifyContent:"center", margin:"1rem"}}>
            {product.id ? <ItemDetail producto={product} className="heigt40rem"/>:null}
        </div>
    )

}

export default DetailPage