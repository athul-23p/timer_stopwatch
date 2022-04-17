import { useState, useEffect } from "react";
function TimerInput({ handleSubmit }) {

  const [input,setInput] = useState("");
  
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <div id="timer-input-container">
      <input type="text" name="time-input" id="" value={input} onChange={(e) =>handleInput(e)}/>
      <button id="submit-btn" onClick={() => handleSubmit(input)}>
        Submit
      </button>
    </div>
  );
}

export default TimerInput;
