import { useContext} from 'react';
import { ItemsContext } from '../../context/ItemsContext';
//imports librerias extrernas

//imports propios
import "./ItemList.css"
import ProductCard from "../ProductCard/ProductCard";

const ItemList = (categoryId) => { 
    const {items} = useContext(ItemsContext);
    const filteredProducts = categoryId.category
    ? items.filter(producto => producto.category === categoryId.category)
    : items;
    
    return (
        <div className="cards-list margin05rem">
            {filteredProducts.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} className="heigt40rem"/>)
            })}
        </div>
    )}

export default ItemList