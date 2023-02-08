import { Book } from "./Book.js";

export const BookList = (props) => {
    return (
        <ul>
            {props.books.map((v, k) => (
                <Book key={k} {...v} />
            ))}
        </ul>
    );
};
