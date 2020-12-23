import React from "react";

function Display({ time }) {
  const addZero = n => n < 10 ? "0" +  n : n;
  return (
    <p className="d-inline">
      {addZero(time.h)}:{addZero(time.m)}:{addZero(time.s)}.{addZero(time.ms)}
    </p>
  );
}

export default Display;
