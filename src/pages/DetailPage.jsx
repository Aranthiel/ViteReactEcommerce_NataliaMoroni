import {useEffect, useState, useContext}from 'react';
//imports librerias extrernas
import {  useParams} from 'react-router-dom';
//imports propios
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { ItemsContext } from '../context/ItemsContext';



const DetailPage = () => { 
    const {items} = useContext(ItemsContext);
    const [product, setProduct]= useState({});
    let {id}=useParams();

    
    useEffect(()=> {
        const foundProduct = items.find((item) => item.id.toString() === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [items, id]);
    
    return (
        <div style={{display:"flex", justifyContent:"center", margin:"1rem"}}>
            {Object.keys(product).length > 0 ? (
                <ItemDetail producto={product} className="heigt40rem" />
            ) : null}
        </div>
    )

}

export default DetailPage