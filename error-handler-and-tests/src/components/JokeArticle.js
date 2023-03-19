const JokeArticke = ({ iconUrl, text }) => {
    if (text && !text.startsWith("Chuck Norris")) {
        console.log(text);
        throw new Error("No Chuck Norris");
    }
    return (
        <article>
            <header>
                <img src={iconUrl} alt="Chuck Norris Joke" />
            </header>
            <main>
                <p className="joke-text">{text}</p>
            </main>
        </article>
    );
};

export default JokeArticke;
