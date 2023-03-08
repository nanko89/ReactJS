import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext.js";
import * as userService from "../../services/userService";

export const Logout = () => {
    const navigate = useNavigate();

    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        userService
            .logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate("/");
            })
            .catch(() => {
                navigate("/");
            });
    });
    return null;
};
