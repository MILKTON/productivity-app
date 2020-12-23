import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Form(props) {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name,seconds);
    setName("");
    setSeconds("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="new-todo-input">What needs to be done?</label>
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
        <label for="new-todo-duration">Duración</label>
        <input
          type="text"
          id="new-todo-duration"
          className="form-control"
          name="text"
          autoComplete="off"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </form>
  );
}

export default Form;