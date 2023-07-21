import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const TabelaDiv = styled.table`
	width: fit-content;
	min-width: 90%;
	height: fit-content;
	background-color: ${Colors.CinzaClaro};
	min-height: 40vh;
	color: ${Colors.Black};
	font-size: 16px;
	margin: 5vh;
	border-radius: 10px;
	th {
		width: 10vw;
		color: ${Colors.Roxo};
	}

	.titulo {
		color: ${Colors.AzulEscuro};
	}

	.horarios {
		color: ${Colors.AzulEscuro};
	}

	td {
		text-align: center;
	}
	h2 {
		color: ${Colors.Roxo};
	}
	h3 {
		color: ${Colors.AzulEscuro};
	}
`;
