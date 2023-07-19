import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const InputDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 0.2em solid ${Colors.AzulClaro};
		background: rgb(251, 251, 251);
		padding: 0.85em 0.8em;
		color: #075e94;
		border-radius: 2em;
		width: 100%;
		box-shadow: 2px 7px 10px ${Colors.Shadow};
	}

	input:hover,
	input:focus {
		border: 0.2em solid ${Colors.Roxo};
	}

	input:focus {
		outline: none;
	}
`;
