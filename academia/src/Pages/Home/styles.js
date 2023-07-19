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
`;
