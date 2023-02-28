import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "../src/services/gameService.js";

import { Home } from "./components/Home/Home.js";
import { Navigation } from "./components/Navigation/Navigation.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { Details } from "./components/Details/Details.js";
import { Edit } from "./components/Edit/Edit.js";
import { Create } from "./components/Create/Create.js";

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll().then((result) => setGames(result));
    }, []);

    return (
        <div id="box">
            <Navigation />
            {/* Main Content */}
            <main id="main-content" />
            <Routes>
                <Route path="/" element={<Home games={games} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog" element={<Catalog games={games} />} />
                <Route path="/catalog/:id" element={<Details />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
