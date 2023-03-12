import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.js"

export const RouteGuard = () =>{

    const {isAuthenticated } = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to={'/login'} replace/>
    }
    
    return <Outlet/>
 
}
