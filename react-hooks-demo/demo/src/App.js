import { TaskList } from "./component/TaskList.js";
import styles from "./App.module.css";
import { CreateTask } from "./component/CreateTask.js";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        { _id: 1, title: "first" },
        { _id: 2, title: "second" },
        { _id: 3, title: "third" },
    ]);

    const createTaskHandler = (newTask) => {
        setTasks((state) => [
            ...state,
            { _id: state[state.length - 1]?._id + 1 || 1, title: newTask },
        ]);
    };

    const taskDeleteHandler = (taskId) => {
        setTasks((state) => state.filter((x) => x._id !== taskId));
    };

    return (
        <div className={styles["site-wrapper"]}>
            <header>
                <h1>TODO App</h1>
            </header>
            <main>
                <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler} />
                <CreateTask createTaskHandler={createTaskHandler} />
            </main>
        </div>
    );
}

export default App;
