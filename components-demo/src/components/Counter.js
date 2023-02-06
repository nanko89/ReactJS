import { useState } from "react";

export const Counter = (props) => {
    const [count, setCount] = useState(props.start || 0);
    const [direction, setDirection] = useState("None");

    const increaseHandler = () => {
        setCount((oldCount) => oldCount + 1);
        setDirection("Increase");
    };

    const decreaseHandler = () => {
        setCount((oldCount) => oldCount - 1);
        setDirection("Decrease");
    };

    const clearHandler = () => {
        setCount(0);
        setDirection("Clear");
    };

    let title = "";

    if (count < 10) {
        title = "Low Counter";
    } else if (count < 20) {
        title = "Medium Counter";
    } else if (count < 30) {
        title = "Mega Counter";
    } else {
        title = "Giga Counter";
    }

    return (
        <div>
            <h1>{title}</h1>
            <h3>{direction}</h3>
            <h2>{count}</h2>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearHandler}>Clear</button>
            <button onClick={increaseHandler}>+</button>
        </div>
    );
};
