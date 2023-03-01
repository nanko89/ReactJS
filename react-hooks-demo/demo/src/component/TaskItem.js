import { useEffect } from "react";

export const TaskItem = ({ id, task, taskDeleteHandler }) => {
    useEffect(() => {
        console.log("Mounted");
        return () => {
            console.log("Unmounted");
        };
    }, []);

    return (
        <li>
            {task} <button onClick={() => taskDeleteHandler(id)}>X</button>
        </li>
    );
};
