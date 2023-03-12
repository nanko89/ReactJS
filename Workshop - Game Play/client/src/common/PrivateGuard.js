import { Navigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext.js"

export const PriviteGuard = ({children}) =>{

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