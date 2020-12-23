import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const App = (props) => {
  const [time, setTime] = useState({
    ms: 0,
    s: props.s,
    m: props.m,
    h: props.h,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const startTimer = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const resetTimer = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: props.s, m: props.m, h: props.h });
  };

  const stopTimer = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resumeTimer = () => {
    startTimer();
  };

  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const run = () => {
    if (updateM === 0 && updateH > 0 && updateS === 0 ) {
      updateH--;
      updateM = 60;
    }
    if (updateS === 0 && updateM > 0) {
      updateM--;
      updateS = 59;
    }
    if (updateMs === 0 && updateS > 0) {
      updateS--;
      updateMs = 100;
    }
    if (updateM > 0 || updateS > 0 || updateMs > 0 || updateH > 0){
      updateMs--;
    }
    else {
      setStatus(3);
    }
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <span>
      <Display time={time} />
      {'\u00A0'}
      <Button
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        resumeTimer={resumeTimer}
        status={status}
      />
    </span>
  );
};

export default App;
