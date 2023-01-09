import React from "react";
import { Routes, Route } from "react-router";
import Ordenes from "./Components/Paginas/Ordenes";
import Menu from "./Components/Paginas/Menu";
import NuevoPlato from "./Components/Paginas/Nuevoplato";
import Sidebar from "./Components/UI/Sidebar";

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-3/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Ordenes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuevo-plato" element={<NuevoPlato />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
