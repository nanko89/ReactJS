import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "../src/services/gameService.js";
import { AuthContext } from "./context/AuthContext.js";
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
    const [auth, setAuth] = useLocalStorage("auth", {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const addGameHandler = (gameData) => {
        setGames((state) => [...state, gameData]);
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
    }, []);

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div id="box">
                <Navigation />
                {/* Main Content */}
                <main id="main-content" />
                <Routes>
                    <Route path="/" element={<Home games={games} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/catalog" element={<Catalog games={games} />} />
                    <Route path="/catalog/:gameId" element={<Details addComment={addComment} />} />
                    <Route path="/create" element={<Create addGameHandler={addGameHandler} />} />
                    <Route path="/catalog/edit/:id" element={<Edit />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
