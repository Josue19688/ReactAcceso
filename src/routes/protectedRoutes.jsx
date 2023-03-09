
import React from "react"
import { Routes, Route } from "react-router-dom";

import NavbarPage from "../shared/navbar";
import HomePage from "../pages/HomePage";
import NovedadesPage from "../pages/NovedadesPage";
import VisitasPage from "../pages/visitasPage";
import ArchivoPage from "../pages/archivoPage";


function ProtectedRoutes() {

  
  return (
    <div className="container mx-auto">
        <NavbarPage/>
        <Routes>
            <Route  path="home" element={<HomePage />} />
            <Route  path="novedades" element={<NovedadesPage />} />
            <Route  path="visitas" element={<VisitasPage />} />
            <Route  path="archivo" element={<ArchivoPage />} />
        </Routes>
    </div>
  );
}

export default ProtectedRoutes;
