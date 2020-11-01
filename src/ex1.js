

import { useState, useEffect } from "react";

export default function Count(props) {
  const [btn, setBtn] = useState();
  const [start, setStart] = useState(0);
  const [step, setStep] = useState(0);
 
  useEffect(() => {
    function saveInStorage() {
      localStorage.setItem("reult", btn);
      localStorage.setItem("start", start);
      localStorage.setItem("step", step);
    }
    saveInStorage();
  });

  function increment() {
    setBtn(step + start);
  }
  function decrement() {
    setBtn(start - step);
  }

  return (
    <div>
      <p>Data from last session: </p>
      <p>start value: {localStorage.getItem("start")}</p>
      <p>second value: {localStorage.getItem("step")}</p>

      <h3>Let's count again: </h3>
      <span>start value: </span>
      <input type="number" onChange={(e) => setStart(e.target.valueAsNumber)} />
      <br />
      <span>second value: </span>
      <input type="number" onChange={(e) => setStep(e.target.valueAsNumber)} />
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>Result: {btn}</p>
    </div>
  );
}
