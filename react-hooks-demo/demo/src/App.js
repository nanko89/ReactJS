import { TaskContext } from "./contexts/TaskContext.js";

import { useFetch } from "./hooks/useFetch.js";
import { useTodos } from "./hooks/useTodos.js";

import styles from "./App.module.css";
import { TaskList } from "./component/TaskList.js";
import { CreateTask } from "./component/CreateTask.js";

function App() {
    const [tasks, setTasks, isLoading] = useFetch("http://localhost:3030/jsonstore/todos", []);
    const { removeTodo, addTodo, updateTodo } = useTodos();

    const createTaskHandler = async (newTask) => {
        const createTodo = await addTodo(newTask);
        setTasks((state) => [...state, createTodo]);
    };

    const taskDeleteHandler = (taskId) => {
        removeTodo(taskId).then(() => {
            setTasks((state) => state.filter((x) => x._id !== taskId));
        });
    };

    const toggleTask = async (task) => {
        const updatedTask = { ...task, isCompleted: !task.isCompleted };
        await updateTodo(task._id, updatedTask);
        setTasks((state) => state.map((x) => (x._id == task._id ? updatedTask : x)));
    };

    const onTaskEditHandler = async (task, newTitle) => {
        const updatedTask = { ...task, title: newTitle };
        await updateTodo(task._id, updatedTask);
        setTasks((state) => state.map((x) => (x._id == task._id ? updatedTask : x)));
    };

    return (
        <TaskContext.Provider value={{ tasks, taskDeleteHandler, toggleTask, onTaskEditHandler }}>
            <div className={styles["site-wrapper"]}>
                <header>
                    <h1>TODO App</h1>
                </header>
                <main>
                    {isLoading ? <p>Loading....</p> : <TaskList />}

                    <CreateTask createTaskHandler={createTaskHandler} />
                </main>
            </div>
        </TaskContext.Provider>
    );
}

export default App;
