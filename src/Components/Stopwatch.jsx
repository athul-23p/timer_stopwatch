import { useState, useEffect,useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);
  const start = () => {
      if(timerId?.current === null){
          timerId.current = setInterval(() => {
            setTime(prev => prev + 1);
          }, 10);

      }
  }

  const stop = () => {
      clearInterval(timerId.current);
      timerId.current = null;
  }

  const reset = () => {
      clearInterval(timerId.current);
      timerId.current = null;
      setTime(0);
  }
  const seconds = Math.floor(time/100)%60;
  const minutes = Math.floor((time/6000))%60;
//   const hours = 0;
  const hours = Math.floor(time/360000)%60;
  const milliSeconds = time%100;
  const timeString = `${hours}h ${minutes}m ${seconds}s ${milliSeconds}`;
  return (
    <div>
      <h2>Stopwatch</h2>
      <h3>{timeString}</h3>
      <div className="timer-controls">
        <button className="start-btn" onClick={start}>Start</button>
        <button className="stop-btn" onClick={stop}>Stop</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
