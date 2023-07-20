import React, { useState } from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, Imagem, MainContainer, Topo } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

function Perfil() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (event) => {
		setLogin(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	return (
		<>
			<Background>
				<Header></Header>
				<Imagem></Imagem>
				<MainContainer>
					<Topo>
						<h2>Meu Perfil</h2>
					</Topo>
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Perfil;
