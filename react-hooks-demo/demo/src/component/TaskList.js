import { TaskItem } from "./TaskItem.js";

import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext.js";

export const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </ul>
    );
};
