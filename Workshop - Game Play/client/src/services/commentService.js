import * as request from "./util/requester.js";

const baseUrl = "http://localhost:3030/data/comments";

export const createComment = (gameId, comment) => 
        request.post(baseUrl, {gameId, comment});

export const getByGameId = (gameId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`gameId="${gameId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}