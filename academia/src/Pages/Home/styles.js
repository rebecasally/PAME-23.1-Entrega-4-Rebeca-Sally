import styled from "styled-components";
import { Colors } from "../../Constants/Theme";
import imagem from "../../Assets/img2.jpg";

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
	background-image: linear-gradient(
			to right,
			rgba(34, 34, 34, 0),
			rgba(34, 34, 34, 0.429),
			${Colors.Gradiente}
		),
		url(${imagem});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	@media (max-width: 870px) {
		min-height: 85vh;
	}
`;

export const MainContainer = styled.div`
	width: 70%;
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
	font-size: 20px;
	flex-direction: column;
	padding: 60px;
	text-align: justify;
	border-radius: 10px;
	box-shadow: 2px 3px 10px ${Colors.Shadow};
	h1 {
		font-size: 30px;
		color: ${Colors.Roxo};
	}
`;

export const Pacotes = styled.div`
	width: 90%;
	height: fit-content;
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: start;
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
	min-width: 150px;
	height: fit-content;
	background-color: ${Colors.AzulClaro};
	min-height: 70vh;
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
		text-align: center;
		margin-left: -35px;
		padding-right: 0;
		margin-bottom: 10px;
	}
	h2 {
		color: ${Colors.Roxo};
	}
`;
