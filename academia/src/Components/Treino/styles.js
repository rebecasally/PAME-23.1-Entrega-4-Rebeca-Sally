import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const TreinoDiv = styled.div`
	padding: 0;
	width: 50%px;
	min-width: 300px;
	height: fit-content;
	background-color: ${Colors.CinzaClaro};
	min-height: 35vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${Colors.Black};
	font-size: 18px;
	margin: 5vh;
	flex-direction: column;
	border-radius: 10px;
	li {
		list-style-type: none;
		text-align: left;
		margin-left: -35px;
		padding-right: 0;
	}
	h2 {
		color: ${Colors.AzulEscuro};
	}
	h3 {
		color: ${Colors.AzulEscuro};
	}
`;
