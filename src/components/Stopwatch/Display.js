import React from "react";

function Display({ time }) {
  const addZero = n => n < 10 ? "0" +  n : n;
  return (
    <div>
      {addZero(time.h)}:{addZero(time.m)}:{addZero(time.s)}.{addZero(time.ms)}
    </div>
  );
}

export default Display;
