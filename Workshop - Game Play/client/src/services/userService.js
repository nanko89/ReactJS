import * as request from "./util/requester.js";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });
