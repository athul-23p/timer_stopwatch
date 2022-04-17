import './App.css';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import {useState,useEffect} from 'react';

function App() {
  const [showTimer,setShowTimer] = useState(true);

  
 
  return (
    <div className="App">
      <div id="tabs">
        <div
          id="timer"
          onClick={() => {
            if (!showTimer) {
              setShowTimer(true);
            }
          }}
        >
          Timer
        </div>
        <div
          id="stopwatch"
          onClick={() => {
            if (showTimer) {
              setShowTimer(false);
            }
          }}
        >
          Stop Watch
        </div>
      </div>
      <div id="content">{showTimer ? <Timer /> : <Stopwatch />}</div>
    </div>
  );
}

export default App;
