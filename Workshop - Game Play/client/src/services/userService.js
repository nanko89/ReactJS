import * as request from "./util/requester.js";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
    try {
        return await request.get(`${baseUrl}/logout`, {
            headers: {
                "X-Authorisation": accessToken,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password });
