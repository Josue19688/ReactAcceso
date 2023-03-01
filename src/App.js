
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NovedadesPage from "./pages/NovedadesPage";
import NavbarPage from "./shared/navbar";


function App() {

  
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <NavbarPage/>
      <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="novedades" element={<NovedadesPage />} />
      </Routes>
    </div>
    
  </BrowserRouter>
    
  );
}

export default App;
