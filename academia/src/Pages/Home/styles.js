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

export const Imagem = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${imagem});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: top;
`;
