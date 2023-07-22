import { useContext, useState } from 'react';
import {Form, FormGroup, Label, Input, Button }  from 'reactstrap';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
import { useParams } from 'react-router-dom';
import Logo from "../../assets/FauxIsotipo.png"

const initialState = {
  customerName: "",
  email: "",
  precio:"",
};
const Checkout = ({}) => {
  const { clearCart } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  let {total}= useParams();

  const handleInputChange = (e)=>{
    const {name, value} =e.target;
    console.log(name, value )
    console.log("values", values )
    setValues({...values,[name]:value, precio:total})
    console.log("n values", values )
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
    clearCart();
  };

  return (
    <>
      
      <Form className='CheckoutForm' onSubmit={onSubmit}>
      <img src={Logo} alt="Logo Tienda Faux" className="logo" />
      <h2 className="resumen"> Estas a punto de confirmar tu compra en TIENDA FAUX por un total de ${total}</h2>
        <FormGroup>
          <Label for="customerNameInput" hidden > Nombre</Label> 
          <Input id="customerNameInput" name="customerName" placeholder="Nombre" type="text" onChange={handleInputChange}/>
        </FormGroup>
        {' '}
        <FormGroup>
            <Label for="emailInput" hidden > Email </Label>
            <Input id="emailInput" name="email" placeholder="Email" type="email" onChange={handleInputChange}/>
        </FormGroup>
        {' '}
        <Button type="submit" className="btnConfirmar">Confirmar</Button>
        {purchaseID && <MessageSuccess className="alert" purchaseID={purchaseID} />}
      </Form>
      
    </>
   );
};

export default Checkout;
