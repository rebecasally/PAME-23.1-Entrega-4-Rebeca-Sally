import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const InputDiv = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 0.2em solid ${Colors.AzulClaro};
	background: rgb(251, 251, 251);
	padding: 0.85em 0.8em;
	color: #075e94;
	border-radius: 2em;
	width: 20vw;
	box-shadow: 2px 7px 10px ${Colors.Shadow};

	&:hover,
	&:focus {
		border: 0.2em solid ${Colors.Roxo};
		outline: none;
	}
`;
