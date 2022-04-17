import './App.css';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import {useState,useRef, useEffect} from 'react';

function App() {
  const [showTimer,setShowTimer] = useState(true);

  const timerTab = useRef(null);
  const stopwatchTab = useRef(null);
  
  useEffect(() => {
      document.querySelector("#timer").classList.toggle("selected");
      document.querySelector("#stopwatch").classList.toggle("selected");
  },[showTimer]);
  return (
    <div className="App">
      <div id="tabs">
        <div
          id="timer"
          ref={timerTab}
          className="selected"
          onClick={() => {
            if (!showTimer) {
              setShowTimer(true);
            
            }
          }}
        >
          TIMER
        </div>
        <div
          id="stopwatch"
          ref={stopwatchTab}
          onClick={() => {
            if (showTimer) {
              setShowTimer(false);

            }
          }}
        >
          STOPWATCH
        </div>
      </div>
      <div id="content">{showTimer ? <Timer /> : <Stopwatch />}</div>
    </div>
  );
}

export default App;
