import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext.js";

import * as gameService from "../../services/gameService";

export const Edit = () => {
    const navigate = useNavigate();
    const [currentGame, setCurrentGame] = useState({});
    const { gameEdit } = useContext(GameContext);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getById(gameId).then((gameData) => setCurrentGame(gameData));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        gameService.edit(gameId, data).then((result) => {
            setCurrentGame(result);
            gameEdit(gameId, result);
        });
        navigate(`/catalog/${gameId}`);
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentGame.title} />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={currentGame.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={currentGame.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={currentGame.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={currentGame.summary} />
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    );
};
