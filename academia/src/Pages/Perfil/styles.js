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

	h1 {
		color: ${Colors.Roxo};
	}
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
`;

export const MainContainer = styled.div`
	width: 70%;
	background-color: ${Colors.White};
	height: fit-content;
	min-height: 450px;
	display: flex;
	margin-top: 10vh;
	margin-bottom: 20vh;
	overflow: auto;
	align-items: center;
	justify-content: start;
	gap: 20px;
	flex-direction: column;
	font-family: sans-serif;
	border-radius: 10px;
	box-shadow: 2px 3px 10px ${Colors.Shadow};
	h3 {
		color: ${Colors.RoxoEscuro};
		a {
			color: ${Colors.Roxo};
		}
		a:visited {
			color: ${Colors.Roxo};
		}

		a:hover {
			color: ${Colors.AzulClaro};
		}
	}
`;

export const Topo = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background-color: ${Colors.Roxo};
	color: ${Colors.White};
	height: 15vh;
	h2 {
		color: ${Colors.White};
		margin-left: 20px;
	}
`;
