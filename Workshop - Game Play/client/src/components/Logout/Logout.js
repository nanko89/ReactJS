import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext.js";
import * as authService from "../../services/userService";

export const Logout = () => {
    const navigate = useNavigate();

    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService
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
