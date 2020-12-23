import React, { useState } from "react";
import Stopwatch from "../Stopwatch/Stopwatch";
import Button from 'react-bootstrap/Button';

export default function Todo(props) {
const [isEditing, setEditing] = useState(false);
const [newName, setNewName] = useState("");
const isComplete = props.completed ? "task-complete"  : "";

function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
const editingTemplate = (
  <form className="stack-small" onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        Modifica la tarea {props.name}
      </label>
      <input
      id={props.id}
      className="todo-text"
      type="text"
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
    />
    </div>
    <div className="btn-group">
      <Button
        type="button"
        className="btn btn-dark btn-sm"
        onClick={() => setEditing(false)}
      >
        Cancel
      </Button>
      <Button type="submit" className="btn btn-success btn-sm">
        Save
      </Button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
  <div>
    <h2 className={"d-inline task-item " + isComplete}>{props.name}</h2>
    <input
      className="float-right"
      type="checkbox" id={props.id}
      defaultChecked={props.completed}
      onChange={() => props.toggleTaskCompleted(props.id)}
    />
    <p className="mb-0">Duracion total {props.seconds}</p>
    <p className="d-inline">Tiempo restante</p> <Stopwatch h={0} m={props.seconds} s={0}/>
  </div>
  <div>{'\u00A0'}</div>
  <div className="btn-group float-right">
    <Button type="button" className="btn btn-warning btn-sm" onClick={() => setEditing(true)}>
       {'\u00A0'}Editar {'\u00A0'} ✎ {'\u00A0'}
    </Button>
    <Button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={() => props.deleteTask(props.id)}
    >
      Eliminar 🗑
    </Button>
  </div>
  </div>
);

return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}