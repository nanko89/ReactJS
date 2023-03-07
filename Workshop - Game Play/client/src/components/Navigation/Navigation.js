import { Form, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to={"/"} className="home">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to={"/catalog"}>All games</Link>
                {user.email ? (
                    <div id="user">
                        <Link to={"/create"} href="#">
                            Create Game
                        </Link>

                        <Link to={"/logout"} href="#">
                            Logout
                        </Link>
                        {user.email && <span>Hello, {user.email}</span>}
                    </div>
                ) : (
                    <div id="guest">
                        <Link to={"/login"} href="#">
                            Login
                        </Link>
                        <Link to={"/register"} href="#">
                            Register
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};
