import { Routes,Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { RegisterPage } from "../pages/Register";
import { ProtectedRoutes } from "./protectedRoutes";

function RoutesAplication(){
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='register' element={<RegisterPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<HomePage/>} />
            </Route>
        </Routes>
    )
}

export {RoutesAplication}