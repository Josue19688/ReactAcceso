




import React, { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/loginPage";

import { PrivateRoutes } from "./privateRouter";
import { PublicRoutes } from "./publicRoutes";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./protectedRoutes";

function AppRoutes() {

  const {auth, verificaToken} = useContext(AuthContext);

 

    useEffect(()=>{
        verificaToken();
    },[verificaToken]);

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/auth/*" element={
              <PublicRoutes isAutenticated={auth.logged}>
                <AuthRoutes />
              </PublicRoutes>
              } />
              <Route path="/inicio/*" element={
                 <PrivateRoutes isAutenticated={auth.logged}  >
                    <ProtectedRoutes/>
                 </PrivateRoutes>
              } 
              />
             
              
           
            {/* <Route exact path="/inicio/*"  element={
              <PrivateRoutes isAutenticated={auth.logged}>
               <ProtectedRoutes/>
              </PrivateRoutes>
            } /> */}
            <Route index  path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
