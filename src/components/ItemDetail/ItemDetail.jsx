//ItemQuantitySelector  Description  AddItemButton

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

//imports propios
// estilos
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  console.log("producto en ItemLIst" , item.id, "|", item.title, "|", item.thumbnail)
  return (
    <Card className="h40rem">
      <img alt={item.title} src={item.thumbnail} className="imgTarjeta" />
      <CardBody>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.brand}
        </CardSubtitle>
        <CardText>
          {item.description}
        </CardText>
        <Button>Comprar</Button>
      </CardBody>
    </Card>
  );
};

export default ItemDetail