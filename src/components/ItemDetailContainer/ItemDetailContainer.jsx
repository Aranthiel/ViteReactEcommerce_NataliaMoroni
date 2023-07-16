import React from 'react';
//imports librerias extrernas
import {  useParams} from 'react-router-dom';
//imports propios
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer  = () => {
  let {id}=useParams()
  return (
    <div>
      ItemDetailContainer 
      <ItemDetail item={id}/>

    </div>
  )
}

export default ItemDetailContainer 