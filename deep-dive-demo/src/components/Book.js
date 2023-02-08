import { useEffect, useState } from "react";
import styles from "./Book.module.css";

export const Book = (book) => {
    const [highlight, setHighLight] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log("Mounting: -" + book.title);
    }, []);

    useEffect(() => {
        console.log("Updating: -" + book.title);
    }, [highlight]);

    const clickHandler = () => {
        setHighLight((state) => !state);
    };

    const deleteHandler = () => {
        setDeleted((state) => !state);
    };

    let style = {};

    if (highlight) {
        style.backgroundColor = "grey";
    }

    if (deleted) {
        style.backgroundColor = "red";
        return (
            <div>
                <h2>Deleted</h2>
                <button onDoubleClick={deleteHandler}>Back</button>
            </div>
        );
    }

    return (
        <li style={style} className={styles["book-item"]}>
            <article className={styles.book}>
                <h2>{book.title}</h2>
                <p>Year: {book.year}</p>
                <p>Price: {book.price}$</p>
                <footer>
                    <span className={styles.author}>{book.author}</span>
                    <button onClick={clickHandler} className={styles.highlight}>
                        Highlight
                    </button>
                    <button onDoubleClick={deleteHandler} className={styles.delete}>
                        Delete
                    </button>
                </footer>
            </article>
        </li>
    );
};
