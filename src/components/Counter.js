import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('white');

    const increment = () => {
        setCount(count + 1);
        setBackgroundColor(`rgb(${count + 1}%, 100%, 100%)`);
    };

    const decrement = () => {
        setCount(count - 1);
        setBackgroundColor(`rgb(${count - 1}%, 100%, 100%)`);
    };

    const reset = () => {
        setCount(0);
        setBackgroundColor('white');
    };

    return (
        <div style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s ease' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
