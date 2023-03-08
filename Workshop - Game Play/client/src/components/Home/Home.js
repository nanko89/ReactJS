import { LatesGame } from "./Game/LatesGame.js";
import { GameContext } from "../../context/GameContext.js";
import { useContext } from "react";

export const Home = () => {
    const { lastGames } = useContext(GameContext);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {lastGames.length > 0 ? (
                    lastGames.map((g) => <LatesGame key={g._id} {...g} />)
                ) : (
                    <p className="no-articles">No games yet</p>
                )}
            </div>
        </section>
    );
};
