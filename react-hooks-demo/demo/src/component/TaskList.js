import { TaskItem } from "./TaskItem.js";
import styles from "./TaskList.module.css";

import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext.js";

export const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <ul className={styles.list}>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </ul>
    );
};
