import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Perfil from "../Pages/Perfil";

function Rotas() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Cadastro" element={<Cadastro />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Perfil" element={<Perfil />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default Rotas;
