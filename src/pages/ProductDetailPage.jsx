import {useEffect, useState, useContext}from 'react';
//imports librerias extrernas
import {  useParams} from 'react-router-dom';
//imports propios
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { ItemsContext } from '../context/ItemsContextFirebas';



const ProductDetailPage = () => { 
    const {items, getItemsByAttribute } = useContext(ItemsContext);
    const [product, setProduct]= useState({});
    let {id}=useParams();

    useEffect(() => {
        const fetchProduct = async () => {
          const filteredItems = await getItemsByAttribute('id', id);
          if (filteredItems.length > 0) {
            console.log(filteredItems)
            setProduct(filteredItems[0]);
          }
        };
    
        fetchProduct();

      }, [getItemsByAttribute, id]);

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

export default ProductDetailPage;