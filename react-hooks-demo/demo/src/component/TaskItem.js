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
            <div className="buttons">
                <button className={styles.delete} onClick={() => taskDeleteHandler(task._id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <button className={styles.edit} onClick={taskEditHandler}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </>
    );

    const editTitle = (
        <form onSubmit={onEdit}>
            <input type="text" name="title" defaultValue={task.title} />
            <button className={styles.save}>SAVE</button>
        </form>
    );
    return <li>{isEdit ? editTitle : taskTitle}</li>;
};
