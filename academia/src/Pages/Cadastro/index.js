import React, { useState } from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, MainContainer } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

function Cadastro() {
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
				<MainContainer>
					<h1>Cadastre-se</h1>
					<Input
						tipo="text"
						id="login"
						content={"Login"}
						onChange={handleLogin}
						value={login}
					></Input>
					<Input
						tipo="password"
						id="password"
						content={"Senha"}
						onChange={handlePassword}
						value={password}
					></Input>
					<Button title={"Cadastrar"} routes="/Perfil"></Button>
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
