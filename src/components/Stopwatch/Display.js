import React from "react";

function Display({ time }) {
  const addZero = n => n < 10 ? "0" +  n : n;
  return (
    <span className="h6">
      {addZero(time.h)}:{addZero(time.m)}:{addZero(time.s)}.{addZero(time.ms)}
    </span>
  );
}

export default Display;
