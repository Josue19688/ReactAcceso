




import React, { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/loginPage";

// import { PrivateRoutes } from "./privateRouter";
// import { PublicRoutes } from "./publicRoutes";

import ProtectedRoutes from "./protectedRoutes";

function AppRoutes() {

  const {auth, verificaToken} = useContext(AuthContext);

 

    useEffect(()=>{
        verificaToken();
    },[verificaToken]);


    console.log(auth.logged)
  return (
    <BrowserRouter>
        <Routes>
            {
                
                auth.logged
                ? <Route index path="/*" element={<ProtectedRoutes/>} />
                : <Route  path="/*" element={  <LoginPage />} />
            }
            
           
            
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
