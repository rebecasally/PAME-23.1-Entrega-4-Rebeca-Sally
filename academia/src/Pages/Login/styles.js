import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

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

export const MainContainer = styled.div`
	width: 70%;
	background-color: ${Colors.White};
	height: fit-content;
	min-height: 60vh;
	display: flex;
	margin-top: 10vh;
	margin-bottom: 20vh;
	overflow: auto;
	padding: 10px;
	align-items: center;
	justify-content: center;
	gap: 20px;
	flex-direction: column;
	font-family: sans-serif;
	border-radius: 10px;
	box-shadow: 2px 3px 10px ${Colors.Shadow};
	h3 {
		color: ${Colors.Roxo};
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
