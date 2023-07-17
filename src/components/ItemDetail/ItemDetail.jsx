//ItemQuantitySelector  Description  AddItemButton

import {useContext} from 'react';
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
import {CartContext} from "../../context/CartContext";
// estilos
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { addToCart}=useContext(CartContext);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === producto.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? producto.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = producto.images.map((image, index) => {
    return (
      <CarouselItem
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="carousel-image" src={image} alt={`Image ${index + 1}`} />
        <CarouselCaption captionText="" captionHeader="" />
      </CarouselItem>
    );
  });

  const handleReservar = () => {
    addToCart(producto); // Agrega el producto al carrito utilizando la función addToCart del contexto
    // Realiza cualquier otra acción necesaria después de agregar el producto al carrito
  };


  return (
    <div className="item-detail-container">
      <div className="carrusel">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={producto.images}
            activeIndex={activeIndex}
            onClickHandler={(index) => setActiveIndex(index)}
          />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
      <div className="detalleProducto" style={{padding:"1.5rem"}}>
        <h3>{producto.title}</h3>
        <p> Marca: {producto.brand} </p>
        <p>Descripción:{producto.description}</p> 
        <p> Precio: {producto.price} </p>
        <Button onClick={handleReservar}>Reservar</Button>
      
      </div>
    </div>
  );
};

export default ItemDetail