import React from 'react';
//imports librerias extrernas
//imports propios
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer