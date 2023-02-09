import { TodoItem } from "./TodoItem.js";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner.js";

export const TodoList = () => {
    const url = "http://localhost:3030/jsonstore/todos/";

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => setTodoList(Object.values(result)));
    }, []);

    const todoClickHandler = (todo) => {
        fetch(`${url}${todo._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
        })
            .then((res) => res.json())
            .then((result) => {
                setTodoList((oldTodos) =>
                    oldTodos.map((todo) => (todo._id == result._id ? result : todo))
                );
            });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.length == 0 && <Spinner />}
                {todoList.map((todo) => (
                    <TodoItem key={todo._id} {...todo} onClick={todoClickHandler} />
                ))}
            </tbody>
        </table>
    );
};
