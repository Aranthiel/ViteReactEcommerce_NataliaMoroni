import { useContext} from 'react';
import { ItemsContext } from '../../context/ItemsContextFirebas';
//imports librerias extrernas

//imports propios
import "./ItemList.css"
import ProductCard from "../ProductCard/ProductCard";

const ItemList = (categoryId) => { 
    const {items} = useContext(ItemsContext);
    const filteredProducts = categoryId.category
    ? items.filter(producto => producto.category === categoryId.category)
    : items;

    const baseUrl = window.location.origin;
    
    return (
        <div className="cards-list margin05rem">
            {filteredProducts.map((producto)=>{ 
                return (<ProductCard key={producto.id} item={producto} baseUrl={baseUrl} className="heigt40rem"/>)
            })}
        </div>
    )}

export default ItemList