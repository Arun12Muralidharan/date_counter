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

  function handleStepDecrement() {
    setStep((step) => step - 1);
  }

  function handleStepIncrement() {
    setStep((step) => step + 1);
  }

  function handleCountDecrement() {
    setCount((count) => count - step);
  }

  function handleCountIncrement() {
    setCount((count) => count + step);
  }

  return (
    <div>
      <p>
        <button onClick={handleStepDecrement}>-</button>
        Step:{step}
        <button onClick={handleStepIncrement}>+</button>
      </p>
      <p>
        <button onClick={handleCountDecrement}>-</button>
        Count:{count}
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
    </div>
  );
}
