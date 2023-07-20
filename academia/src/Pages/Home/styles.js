import styled from "styled-components";
import { Colors } from "../../Constants/Theme";
import imagem from "../../Assets/atleta-feminina-feliz-ajustando-a-maquina-de-remo-e-ouvindo-musica-em-fones-de-ouvido-durante-o-treinamento-esportivo-em-uma-academia.jpg";

export const Background = styled.div`
	margin: 0;
	padding: 0;
	border: 0;
	width: 100vw;
	min-height: 100%;
	height: fit-content;
	background-color: ${Colors.CinzaClaro};
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: column;
	font-family: sans-serif;
`;

export const Imagem = styled.div`
	width: 100%;
	height: 85vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(to right, rgba(34, 34, 34, 0.299), rgba(21, 0, 92, 1.2)),
		url(${imagem});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: top;
`;

export const MainContainer = styled.div`
	width: 80%;
	background-color: ${Colors.White};
	height: fit-content;
	min-height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
	margin-bottom: 20vh;
	overflow: auto;
	padding: 10px;
	color: ${Colors.Black};
	font-size: 18px;
	flex-direction: column;
	padding: 60px;
	text-align: justify;
	h1 {
		color: ${Colors.Roxo};
	}
`;

export const Pacotes = styled.div`
	width: 90%;
	height: fit-content;
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 10vh;
	padding: 20px;
	color: ${Colors.Black};
	font-size: 18px;
	flex-direction: row;
	text-align: justify;
	h1 {
		color: ${Colors.Roxo};
	}
`;

export const Pacote = styled.div`
	width: 60%;
	min-width: 100px;
	height: fit-content;
	background-color: ${Colors.AzulClaro};
	min-height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${Colors.White};
	font-size: 18px;
	margin: 5vh;
	flex-direction: column;
	border-radius: 10px;
	li {
		list-style-type: none;
		text-align: left;
		margin-left: -10px;
		padding-right: 0;
		margin-bottom: 10px;
	}
	h2 {
		color: ${Colors.Roxo};
	}
	h3 {
		color: ${Colors.AzulEscuro};
	}
`;
