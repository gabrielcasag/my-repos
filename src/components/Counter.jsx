import { useState } from "react";

export function Counter() {
  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button
        type="button"
        onClick={increment}
      >
        increment
      </button>
    
      <button
        type="button"
        onClick={reset}
      >
        reset
      </button>
      
    </div>
  );
}