import { TaskContext } from "../contexts/TaskContext.js";

import { useEffect, useContext, useState } from "react";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ task }) => {
    const [isEdit, setIsEdit] = useState(false);

    const { taskDeleteHandler, toggleTask, onTaskEditHandler } = useContext(TaskContext);

    const taskEditHandler = () => {
        setIsEdit(true);
    };

    const onEdit = (e) => {
        e.preventDefault();
        const { title } = Object.fromEntries(new FormData(e.target));
        console.log(title);
        onTaskEditHandler(task, title);
        setIsEdit(false);
    };

    useEffect(() => {
        console.log("Mounted");
        return () => {
            console.log("Unmounted");
        };
    }, []);

    const taskTitle = (
        <>
            <span
                className={task.isCompleted ? styles.completed : ""}
                onClick={() => toggleTask(task)}
            >
                {task.title}
            </span>
            <button onClick={() => taskDeleteHandler(task._id)}>X</button>
            <button onClick={taskEditHandler}>Edit</button>
        </>
    );

    const editTitle = (
        <form onSubmit={onEdit}>
            <input type="text" name="title" defaultValue={task.title} />
            <input type="submit" value="SAVE" />
        </form>
    );
    return <li>{isEdit ? editTitle : taskTitle}</li>;
};
