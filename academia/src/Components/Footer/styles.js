import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const FooterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: ${Colors.Amarelo};
	color: ${Colors.White};
	width: 100vw;
	height: fit-content;
	min-height: 200px;
`;
