const url = "http://localhost:3030/jsonstore/todos";

export const useTodos = () => {
    const removeTodo = (todoId) => {
        return fetch(`${url}/${todoId}`, {
            method: "DELETE",
        }).then((res) => res.json());
    };

    const addTodo = (title) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify({ title, isCompleted: false }),
        }).then((res) => res.json());
    };

    const updateTodo = (todoId, data) => {
        return fetch(`${url}/${todoId}`, {
            method: "PUT",
            body: JSON.stringify(data),
        }).then((res) => res.json());
    };

    return {
        removeTodo,
        addTodo,
        updateTodo,
    };
};
