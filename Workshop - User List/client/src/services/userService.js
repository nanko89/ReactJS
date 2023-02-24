export const getAll = async () => {
    const url = "http://localhost:3005/api/users";
    const responce = await fetch(url);
    const result = await responce.json();
    return result.users;
};

export const getById = async (id) => {
    const url = `http://localhost:3005/api/users/${id}`;
    const responce = await fetch(url);
    const result = await responce.json();
    return result.user;
};

export const create = async (data) => {
    const url = "http://localhost:3005/api/users/";
    const responce = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await responce.json();
    return result.user;
};

export const edit = async (id, data) => {
    const url = `http://localhost:3005/api/users/${id}`;
    const responce = await fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await responce.json();
    return result.user;
};

export const deleted = async (id) => {
    const url = `http://localhost:3005/api/users/${id}`;
    const responce = await fetch(url, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    });

    const result = await responce.json();
    return result.user;
};
