import React, { useState } from "react";
import Stopwatch from "../Stopwatch/Stopwatch";

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
      <button
        type="button"
        className="btn btn-dark btn-sm"
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-success btn-sm">
        Save
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
  <div>
    <h2 className={"d-inline task-item " + isComplete}>Tarea {props.name}</h2>
    <input
      className="float-right"
      type="checkbox" id={props.id}
      defaultChecked={props.completed}
      onChange={() => props.toggleTaskCompleted(props.id)}
    />
    <p className="mb-0">Duracion total {props.seconds}</p>
    <p className="d-inline">Tiempo restante</p> <Stopwatch h={0} m={props.seconds} s={0}/>
  </div>
  <div className="btn-group float-right">
    <button type="button" className="btn btn-warning btn-sm" onClick={() => setEditing(true)}>
      Edit
    </button>
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={() => props.deleteTask(props.id)}
    >
      Delete
    </button>
  </div>
  </div>
);

return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}