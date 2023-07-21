import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const Categoria = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 90%;
	height: fit-content;
	min-height: 60px;
	margin: 10px;
	background-color: ${Colors.AzulClaro};
	border-radius: 5px;
	box-shadow: 2px 2px 10px ${Colors.Shadow};
	button {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-left: 30px;
		margin-top: 9px;
		padding: 10px;
		color: rgb(255, 255, 255);
		font-family: sans-serif;
		font-weight: bold;
		font-size: 20px;
		height: 100%;
		width: 100%;
		appearance: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	button:hover {
		color: ${Colors.RoxoEscuro};
	}
`;

export const Toggle = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
