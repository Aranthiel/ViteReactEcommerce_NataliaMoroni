import {useState} from "react";
import { Alert } from 'reactstrap';


const MessageSuccess = ({ purchaseID }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert isOpen={visible} toggle={onDismiss}>
        Gracias por su compra! su id de transacción es: {purchaseID}
      </Alert>
  );
};

export default MessageSuccess;
