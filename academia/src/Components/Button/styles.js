import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const ButtonDiv = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.7rem 1rem;
	color: rgb(255, 255, 255);
	font-size: 18px;
	font-weight: 700;
	background-color: ${Colors.AzulEscuro};
	cursor: pointer;
	border-radius: 30px;
	border: none;
	width: 10vw;

	box-shadow: 2px 7px 10px ${Colors.Shadow};
	a {
		appearance: none;
		text-decoration: none;
	}
	a:visited {
		color: ${Colors.White};
	}
	&:hover {
		color: white;
		background-color: ${Colors.Roxo};
	}
`;

export const AltButton = styled(ButtonDiv)`
	background-color: ${Colors.AzulClaro};
	&:hover {
		color: white;
		background-color: ${Colors.Roxo};
	}
`;

export const AltButton2 = styled(ButtonDiv)`
	&:hover {
		color: white;
		background-color: ${Colors.Roxo};
	}
`;
