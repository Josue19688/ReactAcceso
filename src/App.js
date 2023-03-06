
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NovedadesPage from "./pages/NovedadesPage";
import NavbarPage from "./shared/navbar";
import VisitasPage from "./pages/visitasPage";
import ArchivoPage from "./pages/archivoPage";


function App() {

  
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <NavbarPage/>
      <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="novedades" element={<NovedadesPage />} />
            <Route path="visitas" element={<VisitasPage />} />
            <Route path="archivo" element={<ArchivoPage />} />
      </Routes>
    </div>
    
  </BrowserRouter>
    
  );
}

export default App;
