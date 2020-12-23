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
      <span>{props.name}</span>
    </Button>
  );
}

export default FilterButton;
