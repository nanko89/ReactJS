const baseUrl = "http://localhost:3030";

export const getAll = () => {
    return fetch(`${baseUrl}/data/games?sortedBy=_createdOn%20desc&distinct=category`).then((res) =>
        res.json()
    );
};

export const getById = (id) => {
    return fetch(`${baseUrl}/data/games/${id}`).then((res) => res.json());
};
