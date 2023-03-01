import { TaskItem } from "./TaskItem.js";

export const TaskList = ({ tasks, taskDeleteHandler }) => {
    return (
        <ul>
            {tasks.map((t) => (
                <TaskItem
                    key={t._id}
                    id={t._id}
                    task={t.title}
                    taskDeleteHandler={taskDeleteHandler}
                />
            ))}
        </ul>
    );
};
