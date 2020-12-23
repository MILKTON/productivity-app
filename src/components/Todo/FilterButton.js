import React from "react";
import Button from 'react-bootstrap/Button';

function FilterButton(props) {
  return (
    <Button
      className="toggle-btn"
      variant="info"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </Button>
  );
}

export default FilterButton;
