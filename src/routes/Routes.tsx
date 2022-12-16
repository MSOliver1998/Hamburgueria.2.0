import { Routes,Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { RegisterPage } from "../pages/Register";

function RoutesAplication(){
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='register' element={<RegisterPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    )
}

export {RoutesAplication}