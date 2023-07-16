import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//imports de terceros
import {
    InputGroup,
    Input,
    Button,
} from 'reactstrap';
//imports propios
import { ItemsContext } from '../../context/ItemsContext';

// estilos
import "./SearchProducts.css"


const SearchProducts = () => { 
    const navigate = useNavigate();
    const {items} =useContext(ItemsContext);
    const [inputValue, setInputValue]=useState("");

    const handleInputChange = (evento)=>{
        setInputValue(evento.target.value)
    };

    const handleInputSubmit = (event)=>{
        event.preventDefault();
        const searchValue=inputValue.toLowerCase().replace(/ /g, ""); // pasa a minusculas y elimina los espacios
        
        if(searchValue.length==0){
            console.log("no existe")
            navigate('/error')
        } else if(searchValue.length > 0 && searchValue.length <= 2) {
            // Buscar por ID de producto
            const product = items.find((item) => item.id.toString() === searchValue);
            if (product) {
                navigate(`/item/${searchValue}`);
            } else {
                navigate('/error');
            }
        } 
        else {
            // Buscar por categoría
            const category = searchValue;
            const productsInCategory = items.filter(
            (item) => item.category.toLowerCase().replace(/ /g, '') === category
            );
            if (productsInCategory.length > 0) {
                navigate(`/category/${searchValue}`);
            } else {
                navigate('/error');
            }
        }
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <InputGroup className="barraBusqueda" >
                <Input id="searchInput" value={inputValue} onChange={handleInputChange} placeholder="¿qué estás buscando?"/>
                <Button className="btnBuscar" type="submit">
                    ID o CATEGORIA
                </Button>
            </InputGroup>            
        </form>
    )
}

export default SearchProducts