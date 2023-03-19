import { createContext, useState } from "react";
import { useEffect } from "react";
import { getAll } from "../services/userService.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [filtredUsers, setFiltredUsers] = useState([]);
    const [filters, setFilters] = useState({
        text: "",
        criteria: "all",
    });

    useEffect(() => {
        getAll().then((users) => {
            setFiltredUsers(users);
            setUsers(users);
        });
    }, []);

    const addUser = (user) => {
        setUsers((oldUser) => [...oldUser, user]);
    };

    const filterUsers = (text, criteria = "all") => {
        // setFilters({ text, criteria });

        if (criteria === "all") {
            setFiltredUsers(users);
        } else {
            setFiltredUsers(users.filter((x) => x[criteria].includes(text)));
        }
    };

    return (
        <UserContext.Provider value={{ users: filtredUsers, addUser, filterUsers }}>
            {children}
        </UserContext.Provider>
    );
};
