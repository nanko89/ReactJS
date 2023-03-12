import { createContext, useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import * as gameService from '../services/gameService';

export const GameContext = createContext();

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAMES':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_GAME':
            return [...state, action.payload];
        case 'FETCH_GAME':
        case 'EDIT_GAME':
            return state.map(x => x._id === action.gameId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.gameId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_GAME':
            return state.filter(x => x._id !== action.gameId);
        default:
            return state;
    }
}

export const GameProvider = ({children}) => {

    const [games, dispatch] = useReducer(gameReducer, []);
    const [lastGames, setLastGames] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then((result) => {
                const action = {
                    type: 'ADD_GAMES',
                    payload: result
                }

                dispatch (action);
        });
        lastedGames();
    }, []);

    const addComment = (gameId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            gameId
            });

        // dispatch ((state) => {
        //     const game = state.find((g) => g._id === gameId);
        //     const comments = game.comments || [];
        //     comments.push(comment);

        //     return [...state.filter((g) => g._id !== gameId), { ...game, comments }];
        // });
    };

    const lastedGames = () => {
        gameService.lastGames().then((result) => {
            setLastGames(result);
        });
    };

    const gameAdd = (gameData) => {
        //with useState ->  setGames ((state) => [...state, gameData]);

        //with useReducer ->
        dispatch({
            type: 'ADD_GAME',
            payload: gameData, 
        });

        lastedGames();
        navigate("/catalog");
    };

    const gameEdit = (gameId, gameData) => {
        // with useState ->  setGames ((state) => state.map((g) => (g._id === gameId ? gameData : g)));

        //with useReducer
        dispatch ({
            type: "EDIT_GAME",
            payload: gameData,
            gameId
        })
    };

    const gameDelete = (gameId) => {
        dispatch({
            type: "REMOVE_GAME",
            gameId
        })
    }

    const fetchGameDetails = (gameId, gameDetails) => {
            dispatch({
                type: 'FETCH_GAME',
                payload: gameDetails,
                gameId,
            });
    }

    const selectGame = (gameId) => {
            return games.find(x=> x._id === gameId) || {};
    }

    return (
        <GameContext.Provider value={{ games, lastGames, gameAdd, gameEdit, addComment, fetchGameDetails, selectGame, gameDelete }}>
            {children}
        </GameContext.Provider>
    )

}