import React from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, Imagem, MainContainer, Topo } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Collapsible from "../../Components/Categoria";
import Treino from "../../Components/Treino";
import Tabela from "../../Components/Table";

function Perfil() {
	const treinos = [
		{
			id: 0,
			dia: "Segunda",
			exerc1: "Supino Reto 3x",
			exerc2: "Supino Inclinado com Halter 3x",
			exerc3: "Remada 3x",
			exerc4: "Elevação Lateral 3x",
		},
		{
			id: 1,
			dia: "Terça",
			exerc1: "Leg Press 45 Drop Set ",
			exerc2: "Hack Machine 3x",
			exerc3: "Agachamento Com Barra 3x",
			exerc4: "Agachamento Sumô 3x",
		},
		{
			id: 2,
			dia: "Quarta",
			exerc1: "",
			exerc2: "",
			exerc3: "",
			exerc4: "",
		},
		{
			id: 3,
			dia: "Quinta",
			exerc1: "",
			exerc2: "",
			exerc3: "",
			exerc4: "",
		},
		{
			id: 4,
			dia: "Sexta",
			exerc1: "",
			exerc2: "",
			exerc3: "",
			exerc4: "",
		},
		{
			id: 5,
			dia: "Sábado",
			exerc1: "Zumba na Praça",
			exerc2: "",
			exerc3: "",
			exerc4: "",
		},
		{
			id: 6,
			dia: "Domingo",
			exerc1: "Corrida",
			exerc2: "",
			exerc3: "",
			exerc4: "",
		},
	];
	return (
		<>
			<Background>
				<Header></Header>
				<Imagem></Imagem>
				<MainContainer>
					<Topo>
						<h2>Meu Perfil</h2>
					</Topo>
					<h3>Seja bem vindo ao seu perfil na academia!</h3>
					<Collapsible label={"Cronograma"}>
						<h3>Horário das aulas coletivas oferecidas pela academia</h3>
						<Tabela></Tabela>
					</Collapsible>
					<Collapsible label={"Treino do dia"}>
						<Treino data={treinos[0]}></Treino>
					</Collapsible>
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Perfil;
