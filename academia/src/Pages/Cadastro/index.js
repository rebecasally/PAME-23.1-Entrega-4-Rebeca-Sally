import React from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, MainContainer } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Cadastro() {
	return (
		<>
			<Background>
				<Header title={"Bom dia"}></Header>
				<MainContainer></MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Cadastro;
