import { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { saveToFirebase } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [procesado, setProcesado] = useState(false);

  const toggle = () => setModal(!modal);

  const handleCheckout = () => {
    // Aquí obtienes los datos necesarios (email, nombre, total) para guardar en Firebase
    const email = 'ejemplo@correo.com';
    const customerName = 'John Doe';
    const total = 100;

    // Llama a la función saveToFirebase del CartContext para guardar la compra
    saveToFirebase(email, customerName, total);

    // Muestra el mensaje de éxito y cierra el modal después de un tiempo (por ejemplo, 3 segundos)
    setTimeout(() => {
      setProcesado(true);
      setTimeout(() => {
        toggle();
      }, 3000);
    }, 0);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Finalizar compra
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {procesado ? (
            <p>La compra se procesó con éxito.</p>
          ) : (
            <Form>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
              </FormGroup>
              <Button onClick={handleCheckout}>Confirmar compra</Button>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          {!procesado && (
            <Button color="secondary" onClick={toggle}>
              Cerrar
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Checkout;
