import { useState } from "react";

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
                placeholder="Do the dishes"
            />

            <input type="submit" value="ADD" />
        </form>
    );
};
