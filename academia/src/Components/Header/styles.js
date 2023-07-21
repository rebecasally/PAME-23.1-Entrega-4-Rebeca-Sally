import styled from "styled-components";
import { Colors } from "../../Constants/Theme";
import img from "../../Assets/logo1.png";

export const HeaderDiv = styled.div`
	top: 0;
	position: sticky;
	display: flex;
	align-items: center;
	background-color: ${Colors.AzulClaro};
	color: ${Colors.White};
	width: 100vw;
	height: 17vh;
	min-height: 100px;
	padding: 0;
	box-shadow: 1px 1px 5px ${Colors.Shadow};
`;

export const HeaderTitle = styled.div`
	margin-left: 2vw;
	text-align: center;
	font-size: 24px;
	font-family: sans-serif;
	text-transform: uppercase;
	font-weight: bold;
`;

export const Logo = styled.div`
	height: 10vh;
	width: 10vh;
	display: flex;
	margin-left: 2vw;
	align-items: center;
	border-radius: 20px;
	justify-content: center;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: 90%;
	background-position: center;
	min-height: 60px;
	min-width: 100px;
	@media (max-width: 830px) {
		min-height: 90px;
		min-width: 90px;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 36vw;
	height: 100%;
	margin-left: 35vw;
`;
