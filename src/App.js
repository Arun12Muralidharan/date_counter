import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleStepDecrement() {
  //   setStep((step) => step - 1);
  // }

  // function handleStepIncrement() {
  //   setStep((step) => step + 1);
  // }

  function handleCountDecrement() {
    setCount((count) => count - step);
  }

  function handleCountIncrement() {
    setCount((count) => count + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <p>
        <input
          type="range"
          value={step}
          min="0"
          max="10"
          onChange={(e) => {
            setStep(+e.target.value);
          }}
        />
        <label>{step}</label>
      </p>
      <p>
        <button onClick={handleCountDecrement}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
        <button onClick={handleCountIncrement}>+</button>
      </p>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
