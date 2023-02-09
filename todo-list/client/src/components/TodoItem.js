export const TodoItem = (props) => {
    let classNames = "todo";

    if (props.isCompleted) {
        classNames += " is-completed";
    }
    return (
        <tr className={classNames}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => props.onClick(props)}>
                    Change status
                </button>
            </td>
        </tr>
    );
};
