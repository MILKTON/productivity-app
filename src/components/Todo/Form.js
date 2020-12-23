import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form(props) {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(name === "" || seconds === "")
    {
      toast.error("Debes rellenar todos los campos");
    }
    else
    {
      props.addTask(name,seconds);
      toast.success("Nueva tarea añadida exitosamente!");
      setName("");
      setSeconds("");
    }
  }

  function handleChange(e) {
    if(e.target.value === "" || (e.target.value >= 0 && e.target.value <= 120))
    {
      setSeconds(e.target.value);
    }
    else
    {
      toast.error("No puedes ingresar tareas de mas de 120 minutos 😥");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form-group">
        <label htmlFor="new-todo-input">Tarea a realizar</label>
        <input
          type="text"
          id="new-todo-input"
          className="form-control"
          name="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
      <label htmlFor="tabs">Duración</label>
      <Tab.Container id="tabs" defaultActiveKey="first" transition={false}>
        <Row>
          <Col xs={12} lg={4}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Predefinida</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Personalizada</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} lg={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="form-group">
                  <select className="form-control formControlSelect" onChange={handleChange}>
                    <option readOnly>Selecciona una opción</option>
                    <option value="30">Corto (30 minutos)</option>
                    <option value="45">Medio (45 minutos)</option>
                    <option value="60">Largo (60 minutos)</option>
                  </select>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                  <label htmlFor="new-todo-duration"> {'\u00A0'}</label>
                  <input
                    type="text"
                    id="new-todo-duration"
                    className="form-control formControlSelect"
                    name="text"
                    autoComplete="off"
                    value={seconds}
                    placeholder="Total minutos" 
                    onChange={handleChange}
                  />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
      <div className="col text-center">
        <Button variant="info" size="sm" type="submit">
          Crear tarea
        </Button>
      </div>
    </form>
  );
}

export default Form;