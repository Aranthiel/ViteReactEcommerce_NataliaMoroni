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
            Error page
        </div>
    );
}

export default ErrorPage;