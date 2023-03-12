import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ 
            user: auth, 
            userLogin, 
            userLogout,
            isAuthenticated: !!auth.accessToken // ===  auth.accessToken ? true : false;
        }}>
            {children}
        </AuthContext.Provider>
        );
};

// Custom hook
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
