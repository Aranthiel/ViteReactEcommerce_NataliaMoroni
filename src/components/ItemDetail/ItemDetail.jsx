//ItemQuantitySelector  Description  AddItemButton

import React from 'react';
import { useState } from 'react';
//imports de terceros
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

//imports propios
// estilos
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
  const fotos = producto.images;
  console.log("fotos", fotos);
  return (
    <div style={{display:"flex", width:"80%"}}>
      <div className="carrusel">
        <img src={producto.thumbnail} alt={producto.title} />
      </div>
      <div className="detalleProducto" style={{padding:"1.5rem"}}>
        <h3>{producto.title}</h3>
        <p> Marca: {producto.brand} </p>
        <p>Descripción:{producto.description}</p> 
        <p> Precio: {producto.price} </p>
        <Button>Comprar</Button>
      
      </div>
    </div>
  );
};

export default ItemDetail