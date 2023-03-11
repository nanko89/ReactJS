import "./App.css";

import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.js";
import { GameContext, GameProvider } from "./context/GameContext.js";

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
    return (
        <AuthProvider>
            <div id="box">
                <Navigation />
                {/* Main Content */}
                <main id="main-content" />
                <GameProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route
                            path="/catalog/:gameId"
                            element={<Details />}
                        />
                        <Route path="/create" element={<Create />} />
                        <Route path="/catalog/:gameId/edit" element={<Edit />} />
                    </Routes>
                </GameProvider>
            </div>
        </AuthProvider>
    );
}

export default App;
