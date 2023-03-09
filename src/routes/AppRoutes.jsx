




import React, { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/loginPage";





import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./protectedRoutes";

function AppRoutes() {

  const {auth, verificaToken} = useContext(AuthContext);

  console.log(auth);

    useEffect(()=>{
        verificaToken();
    },[verificaToken]);

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/auth/*" element={<AuthRoutes />} />
            <Route  path="/inicio/*"  element={<ProtectedRoutes />} />
            <Route index  path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
