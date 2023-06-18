import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
    const navigate =useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000)
    }, [navigate])
    
    return (
        <div >
            Ups! parece que la pagina que buscas no esta disponible!!!!
            NO te preocupes! enseguiida te llevamos de nuevo a la página principal!
        </div>
    );
}

export default ErrorPage;