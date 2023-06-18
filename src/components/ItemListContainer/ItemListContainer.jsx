import React from 'react';
//imports librerias extrernas
//imports propios
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <p>{greeting}</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer