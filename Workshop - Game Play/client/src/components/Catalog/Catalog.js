import { CatalogItem } from "./CatalogItem/CatalogItem.js";
import { GameContext } from "../../context/GameContext.js";
import { useContext } from "react";

export const Catalog = () => {
    const { games } = useContext(GameContext);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {games.length > 0 ? (
                games.map((g) => <CatalogItem key={g._id} {...g} />)
            ) : (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};
