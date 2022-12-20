import { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import { UserContext } from "../contexts/userContext/UserContext";


function ProtectedRoutes(){
    const { user, waiting } = useContext(UserContext);

    if(waiting) {
        return null
    }

    return user ? <Outlet /> : <Navigate to='/' />  
}

export {ProtectedRoutes}