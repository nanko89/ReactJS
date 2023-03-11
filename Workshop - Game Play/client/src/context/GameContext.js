import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as gameService from '../services/gameService';

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [games, setGames] = useState([]);
    const [lastGames, setLastGames] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll().then((result) => {
            setGames(result);
        });
        lastedGames();
    }, []);

    const addComment = (gameId, comment) => {
        setGames((state) => {
            const game = state.find((g) => g._id === gameId);
            const comments = game.comments || [];
            comments.push(comment);

            return [...state.filter((g) => g._id !== gameId), { ...game, comments }];
        });
    };

    const lastedGames = () => {
        gameService.lastGames().then((result) => {
            setLastGames(result);
        });
    };

    const gameAdd = (gameData) => {
        setGames((state) => [...state, gameData]);
        lastedGames();
        navigate("/catalog");
    };

    const gameEdit = (gameId, gameData) => {
        setGames((state) => state.map((g) => (g._id === gameId ? gameData : g)));
    };


    return (
        <GameContext.Provider value={{ games, lastGames, gameAdd, gameEdit, addComment }}>
            {children}
        </GameContext.Provider>
    )

}