import React, { useState } from "react";
import "../styles/App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const backgroundColor = `rgba(0, 128, 255, ${Math.min(count / 10, 1)})`;

  return (
    <div style={{ backgroundColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
