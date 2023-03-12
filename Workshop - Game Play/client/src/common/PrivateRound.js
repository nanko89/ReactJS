import { Navigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext.js"

export const PriviteRoute = ({children}) =>{

    const {isAuthenticated } = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to={'/login'} replace/>
    }

    return( 
    <>
        {children}
    </> 
    );
}