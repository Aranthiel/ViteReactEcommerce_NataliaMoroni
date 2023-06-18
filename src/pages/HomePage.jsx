//components

import ProductCard from '../components/ProductCard/ProductCard';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';



function HomePage() {
    return (
        <div >
            Home page
            <ItemListContainer greeting="Proyecto Ecommerce creado con VITE - Mensaje pasado por Prop: Requerimiento de CoderHouse" />
            <ProductCard />
            
        </div>
    );
}

export default HomePage;


