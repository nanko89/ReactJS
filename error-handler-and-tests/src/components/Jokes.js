import { useEffect, useState } from "react";
import JokeArticke from "./JokeArticle.js";

const Jokes = () => {
    const [joke, setJoke] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then((result) => {
                setJoke(result);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <JokeArticke iconUrl={joke.icon_url} text={joke.value} />;
};

export default Jokes;
