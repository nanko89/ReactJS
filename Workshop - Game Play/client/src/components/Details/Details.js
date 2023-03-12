import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as gameService from "../../services/gameService";
import * as commentService from '../../services/commentService';
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.js";
import { GameContext } from "../../context/GameContext.js";

export const Details = () => {
    const { user } = useContext(AuthContext);
    
    const { selectGame, addComment, fetchGameDetails, gameDelete } = useContext(GameContext);

    const { gameId } = useParams();

    const currentGame = selectGame(gameId);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const gameDetails = await gameService.getById(gameId);
            const gameComments = await commentService.getByGameId(gameId);

            fetchGameDetails(gameId, {
                ...gameDetails, 
                comments: gameComments.map(x => `${x.user.email}: ${x.comment}`)
            });
        })();
     }, []);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');

        commentService.createComment(gameId, comment)
            .then(() => {
                addComment(gameId, comment);
        });
    };

    const gameDeleteHandler = () => {
        if( window.confirm("Are you sure you want to delete this game?")){
            gameService
                .remove(gameId)
                .then (() => {
                    gameDelete(gameId);
                    navigate('/catalog');
                })
            ;
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">{currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">{currentGame.summary}</p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {currentGame.comments?.map(x => 
                            <li key={x._id} className="comment">
                                <p>{x}</p>
                            </li>
                            
                        )}
                    </ul>

                    {!currentGame.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </div>

                {currentGame._ownerId === user._id ? (
                    <div className="buttons">
                        <Link to={`/catalog/${gameId}/edit`} className="button">
                            Edit
                        </Link>
                        <button onClick={gameDeleteHandler} className="button">
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                    />

                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
};
