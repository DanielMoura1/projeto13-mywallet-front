import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Inicio from "./Inicio.js";
import "./style.css";
import Cadastro from "./Cadastro.js";
import Pg1 from "./Pg1.js";
import saida from "./Saida.js";
import Entrada from "./Entrada";
import Saida from "./Saida.js";
export default  function App() {
  const [token,setToken] =useState([])

return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio token={token} setToken={setToken}/>} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/pg1" element={<Pg1 token={token}/>} />
      <Route path="/entrada" element={<Entrada token={token}/>} />
      <Route path="/saida" element={<Saida token={token} />} />
    </Routes>
    </BrowserRouter>
  </div>
 
)
}