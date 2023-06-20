import React from 'react';
//imports librerias extrernas
import {  useParams} from 'react-router-dom';
//imports propios
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    let {categoryId}=useParams();
    return (
        <div>
            <p>{greeting}</p>
            <ItemList category={categoryId}/>
        </div>
    )
}

export default ItemListContainer