import { useState } from "react";

import styles from "./CreateTask.module.css";

export const CreateTask = ({ createTaskHandler }) => {
    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        createTaskHandler(task);
        setTask("");
    };

    const onTaskChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="task-name">Task Name: </label>
            <input
                id="task-name"
                type="text"
                name="taskName"
                value={task}
                onChange={onTaskChange}
                placeholder="Add New Task Here..."
            />

            <input className={styles.add} type="submit" value="ADD" />
        </form>
    );
};
