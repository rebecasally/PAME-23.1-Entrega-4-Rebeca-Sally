import React, { useState } from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, MainContainer } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { AltButtonDiv } from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

function Login() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (event) => {
		setLogin(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const user = { email: login, senha: password };

	return (
		<>
			<Background>
				<Header></Header>
				<MainContainer>
					<h1>Entre em sua conta</h1>
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
						value={login}
					></Input>
					<AltButtonDiv title={"Entrar"} routes="/Perfil"></AltButtonDiv>
					<h3>
						Não possui uma conta? Faça o <Link to="/Cadastro">Cadastro</Link>
					</h3>
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Login;
