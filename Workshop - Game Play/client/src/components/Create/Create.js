import { useState } from "react";

export const Create = ({ addGameHandler }) => {
    const onCreate = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        addGameHandler(data);
    };

    const [newGame, setNewGame] = useState({
        title: "",
        category: "",
        imageUrl: "",
        summary: "",
        maxLevel: "",
    });

    const [error, setError] = useState({
        title: false,
        category: false,
        imageUrl: false,
        summary: false,
        maxLevel: false,
    });

    const minLenght = (e, length) => {
        if (e.target.value.length < length) {
            return setError((state) => ({
                ...state,
                [e.target.name]: `Field must be longer then ${length} characters.`,
            }));
        }
    };

    const positiveNumber = (e) => {
        if (Number(e.target.value) < 1 || Number(e.target.value == NaN)) {
            return setError((state) => ({
                ...state,
                [e.target.name]: "Max level must be greater than 1.",
            }));
        }
    };

    const onChange = (e) => {
        setNewGame((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onCreate}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={onChange}
                        onBlur={(e) => minLenght(e, 3)}
                        value={newGame.title}
                    />
                    {error.title && <div style={{ color: "red" }}>{error.title}</div>}
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={onChange}
                        onBlur={(e) => minLenght(e, 3)}
                        value={newGame.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        placeholder={1}
                        onChange={onChange}
                        onBlur={positiveNumber}
                        value={newGame.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={onChange}
                        value={newGame.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={onChange}
                        value={newGame.summary}
                    />
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
};
