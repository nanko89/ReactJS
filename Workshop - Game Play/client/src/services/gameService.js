import * as request from "./util/requester.js";

const baseUrl = "http://localhost:3030";

export const getAll = () => {
    return request.get(`${baseUrl}/data/games?sortedBy=_createdOn%20desc&distinct=category`);
};

export const getById = (id) => {
    return request.get(`${baseUrl}/data/games/${id}`);
};
