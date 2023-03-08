import * as request from "./util/requester.js";

const baseUrl = "http://localhost:3030/data/games";

export const getAll = () => {
    return request.get(`${baseUrl}?sortedBy=_createdOn%20desc`);
};

export const lastGames = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);
};

export const getById = (id) => {
    return request.get(`${baseUrl}/${id}`);
};

export const create = (data) => {
    return request.post(baseUrl, data);
};

export const edit = (id, data) => {
    return request.put(`${baseUrl}/${id}`, data);
};
