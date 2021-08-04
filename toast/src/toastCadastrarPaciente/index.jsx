import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import "./style.css";

function ToastCadastrarPaciente() {

  const [show, setShow] = useState(false);

  return (
        <>
          <Toast className="toast" onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>Paciente cadastrado com sucesso!</Toast.Body>
          </Toast>
          <Button onClick={() => setShow(true)} >Cadastrar</Button>
        </>
  );
}

export default ToastCadastrarPaciente;