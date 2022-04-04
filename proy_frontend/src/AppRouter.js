import React from 'react';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cortes from "./componentes/user/Cortes";
import Inicio from "./componentes/user/Inicio";
import Registro from "./componentes/user/Registro";
import Bano from "./componentes/user/Bano";
import Login from "./componentes/user/Login"
import Mostrar from './componentes/user/Mostrar';


export default function AppRouter() {
        return (

            <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/Registro" element={<Registro />} />
                </Routes>
                <Routes>
                    <Route path="/Inicio" element={<Inicio />} />
                </Routes>
                <Routes>
                    <Route path="/Mostrar" element={<Mostrar />} />
                </Routes>
                <Routes>
                    <Route path="/Cortes" element={<Cortes />} />
                </Routes>
                <Routes>
                    <Route path="/Bano" element={<Bano />} />
                </Routes>
            </Router>
        );
    
}