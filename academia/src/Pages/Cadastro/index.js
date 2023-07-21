import React, { useState } from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, MainContainer } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { AltButtonDiv } from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

function Cadastro() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const handleLogin = (event) => {
		setLogin(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleName = (event) => {
		setName(event.target.value);
	};

	const user = { nome: name, email: login, senha: password };

	return (
		<>
			<Background>
				<Header></Header>
				<MainContainer>
					<h1>Cadastre-se</h1>
					<Input
						tipo="text"
						id="login"
						content={"Login"}
						onChange={handleLogin}
						value={login}
					></Input>
					<Input tipo="text" id="name" content={"Nome"} onChange={handleName} value={name}></Input>
					<Input
						tipo="password"
						id="password"
						content={"Senha"}
						onChange={handlePassword}
						value={password}
					></Input>
					<AltButtonDiv title={"Cadastrar"} routes="/Perfil"></AltButtonDiv>
					<h3>
						Já possui conta? Faça o <Link to="/Login">Login</Link>
					</h3>
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Cadastro;
