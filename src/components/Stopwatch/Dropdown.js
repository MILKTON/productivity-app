import React from "react";

import "../App.css";

const Dropdown = ({ setStopwatches }) => {
  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">Timer</button>
        <ul className="dropdown-content">
          <li onClick={() => setStopwatches(1)}>1</li>
          <li onClick={() => setStopwatches(2)}>2</li>
          <li onClick={() => setStopwatches(3)}>3</li>
          <li onClick={() => setStopwatches(4)}>4</li>
          <li onClick={() => setStopwatches(5)}>5</li>
          <li onClick={() => setStopwatches(6)}>6</li>
          <li onClick={() => setStopwatches(7)}>7</li>
          <li onClick={() => setStopwatches(8)}>8</li>
          <li onClick={() => setStopwatches(9)}>9</li>
          <li onClick={() => setStopwatches(10)}>10</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
