import { useEffect, useState } from "react";

export const Characters = (props) => {
    const url = "https://swapi.dev/api/people";

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setCharacters(result.results);
            });
    }, []);

    return (
        <ul>
            {characters.length === 0 && <li>Loading...</li>}
            {characters.map((c) => (
                <li key={c.name}>{c.name}</li>
            ))}
        </ul>
    );
};
