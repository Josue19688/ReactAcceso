




import React, { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";





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
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route index path="/inicio/*"  element={<ProtectedRoutes />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
