import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as gameService from "../src/services/gameService.js";
import { AuthContext } from "./context/AuthContext.js";
import { GameContext } from "./context/GameContext.js";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { Home } from "./components/Home/Home.js";
import { Navigation } from "./components/Navigation/Navigation.js";
import { Login } from "./components/Login/Login.js";
import { Logout } from "./components/Logout/Logout.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { Details } from "./components/Details/Details.js";
import { Edit } from "./components/Edit/Edit.js";
import { Create } from "./components/Create/Create.js";

function App() {
    const [games, setGames] = useState([]);
    const [lastGames, setLastGames] = useState([]);
    const [auth, setAuth] = useLocalStorage("auth", {});

    const navigate = useNavigate();

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        // Clear local storage
        setAuth({});
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
        setGames((state) => state.map((g) => (g._id == gameId ? gameData : g)));
    };

    const addComment = (gameId, comment) => {
        setGames((state) => {
            const game = state.find((g) => g._id == gameId);
            const comments = game.comments || [];
            comments.push(comment);

            return [...state.filter((g) => g._id !== gameId), { ...game, comments }];
        });
    };

    useEffect(() => {
        gameService.getAll().then((result) => {
            setGames(result);
        });
        lastedGames();
    }, []);

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div id="box">
                <Navigation />
                {/* Main Content */}
                <main id="main-content" />
                <GameContext.Provider value={{ games, lastGames, gameAdd, gameEdit }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route
                            path="/catalog/:gameId"
                            element={<Details addComment={addComment} />}
                        />
                        <Route path="/create" element={<Create />} />
                        <Route path="/catalog/:gameId/edit" element={<Edit />} />
                    </Routes>
                </GameContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
