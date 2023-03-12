
import { useContext } from "react";
import { useParams, Navigate, Outlet } from "react-router-dom"

import { useAuthContext } from "../context/AuthContext.js";
import { GameContext } from "../context/GameContext.js";

export const GameOwner = ({children}) => {
    const { user, isAuthenticated } = useAuthContext();
    const { gameId } = useParams();
    const { selectGame } = useContext(GameContext);

    const currentGame = selectGame(gameId);

    if (!isAuthenticated || user._id !== currentGame._ownerId){
        return <Navigate to='/catalog' replace />
    }

    return children ? children : <Outlet/>;

} 