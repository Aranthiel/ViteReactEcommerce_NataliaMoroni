import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//imports de terceros
import {
    InputGroup,
    Input,
    Button,
} from 'reactstrap';
//imports propios
// estilos
import "./SearchProducts.css"
const API_URL = "https://dummyjson.com/products";
const SearchProducts = () => { 
    const navigate = useNavigate();
    const [inputValue, setInputValue]=useState("");
    const handleInputChange = (evento)=>{
        setInputValue(evento.target.value)
    }
    const handleInputSubmit = (event)=>{
        event.preventDefault();
        console.log('inputValue ', inputValue);
        const searchValue=inputValue.toLowerCase().replace(/ /g, ""); // pasa a minusculas y elimina los espacios
        console.log('searchValue ', searchValue);
        console.log('searchValue length ', searchValue.length);
        if(searchValue.length==0){
            console.log("no existe")
            navigate('/error')
        } else if(searchValue.length>0 && searchValue.length<=2){
            console.log("id producto")
            navigate(`/item/${searchValue}`)
        }
        else{
            console.log("categoria")
            navigate(`/category/${searchValue}`) 
            
        }
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <InputGroup className="barraBusqueda" >
                <Input id="searchInput" value={inputValue} onChange={handleInputChange} placeholder="¿qué estás buscando?"/>
                <Button className="btnBuscar" type="submit">
                    ID Producto
                </Button>
            </InputGroup>            
        </form>
    )
}

export default SearchProducts