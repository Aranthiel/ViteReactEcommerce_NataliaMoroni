
import React from 'react';
//imports de terceros
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText, 
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

//imports propios
// estilos
import "./ProductCard.css"

const ProductCard = ({item}) => {
 
  return (
    <Link to={`item/${item.id}`}>
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
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard