
import React from 'react';
//imports de terceros
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText  
} from 'reactstrap';

//imports propios
// estilos
import "./ProductCard.css"

const ProductCard = ({item}) => {
  return (
    <Card className="h40rem">
      <img alt={item.title} src={item.thumbnail} className="imgTarjeta" />
      <CardBody>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.brand}
        </CardSubtitle>
        <CardText>
          ${item.price}
        </CardText>
        <CardText>
          Más info
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ProductCard