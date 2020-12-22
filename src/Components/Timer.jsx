import React, { useEffect, useState } from "react";

export const Countdown = (props) => {
  const [countdownDate, setCountdownDate] = useState(new Date(new Date().getTime() + (props.tiempo * 60 * 1000)).getTime());
  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;
      console.log("countdownDate"+countdownDate);
      console.log("currentTime"+currentTime);
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <div className='time'>{state.hours || '00'}:{state.minutes || '00'}:{state.seconds || '00'}</div>
    </div>
  );
};


export default Countdown;
