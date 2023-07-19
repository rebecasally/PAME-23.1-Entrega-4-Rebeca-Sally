import styled from "styled-components";
import { Colors } from "../../Constants/Theme";
import img from "../../Assets/755298.png";

export const HeaderDiv = styled.div`
	top: 0;
	position: sticky;
	display: flex;
	align-items: center;
	background-color: ${Colors.Azul};
	color: ${Colors.White};
	width: 100vw;
	height: 20vh;
	min-height: 150px;
	padding: 0;
	box-shadow: 1px 1px 5px ${Colors.Shadow};
`;

export const HeaderTitle = styled.div`
	margin-left: 2vw;
	text-align: center;
	font-size: 20px;
	font-family: sans-serif;
	text-transform: uppercase;
	font-weight: bold;
`;

export const Logo = styled.div`
	height: 15vh;
	width: 15vh;
	display: flex;
	margin-left: 3vw;
	align-items: center;
	justify-content: center;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: 90%;
	background-position: center;
	min-height: 60px;
	min-width: 60px;
	@media (max-width: 830px) {
		height: 60px;
		width: 60px;
	}
`;
