import React, { useState } from "react";
import Stopwatch from "../Stopwatch/Stopwatch";

export default function Todo(props) {
const [isEditing, setEditing] = useState(false);
const [newName, setNewName] = useState("");

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
        className="btn todo-cancel"
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">

    <h6>Tarea {props.name}</h6>
    <h6>Duracion total {props.seconds}</h6>
    <span className="h6">Tiempo restante</span> <Stopwatch h={0} m={props.seconds} s={0}/>

        <input
          type="checkbox" id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />

        <label >
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
  </div>
);

return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}