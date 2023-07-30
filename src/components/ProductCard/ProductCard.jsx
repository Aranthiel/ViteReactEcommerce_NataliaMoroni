
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

const ProductCard = ({item, baseUrl}) => {  
  console.log(baseUrl , item.id)
 
  return (
    <Link to={`${baseUrl}/item/${item.id}`}>
      <Card className="pCard">
        <img className="imgTarjeta" alt={item.title} src={item.thumbnail} />
        <CardBody className="cBody">
          <CardTitle className="cTitle" tag="h2">{item.title}</CardTitle>
          <CardSubtitle className="mb-2 cSubtitle" tag="h6">
            {item.brand}
          </CardSubtitle>          
        </CardBody>
        <CardText className=" cPrice" >
            ${item.price}
          </CardText>
      </Card>
    </Link>
  );
};

export default ProductCard