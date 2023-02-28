import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link to={"/"} className="home">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to={"/catalog"}>All games</Link>
                {/* Logged-in users */}
                <div id="user">
                    <Link to={"/create"} href="#">
                        Create Game
                    </Link>
                    <Link to={"/"} href="#">
                        Logout
                    </Link>
                </div>
                {/* Guest users */}
                <div id="guest">
                    <Link to={"/login"} href="#">
                        Login
                    </Link>
                    <Link to={"/register"} href="#">
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
};
