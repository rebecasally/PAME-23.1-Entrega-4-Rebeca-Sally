import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const FooterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: ${Colors.RoxoEscuro};
	color: ${Colors.White};
	width: 100%;
	height: fit-content;
	min-height: 200px;
	flex-direction: row;
	list-style-type: none;
	font-size: 20px;
	gap: 50px;
	font-family: sans-serif;
	@media (max-width: 830px) {
		gap: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Info = styled.div`
	margin-left: -10vw;
	font-size: 16px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: center;
	width: 400px;
	list-style-type: none;
	margin-bottom: 15px;
	margin-top: 15px;
	@media (max-width: 830px) {
		margin-left: 0px;
	}
`;

export const NomeInfo = styled.div`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	ul {
		margin: 5px;
		@media (max-width: 830px) {
			margin-left: 0;
		}
	}
`;

export const Contato = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: -5vw;
	@media (max-width: 830px) {
		margin-left: -10vw;
	}
	ul {
		font-size: 16px;
	}
`;

export const Socials = styled.div`
	margin-right: 0;
	font-size: 16px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: center;
	width: 200px;
	li {
		list-style-type: none;
		appearance: none;
	}
	ul {
		display: flex;
		list-style-type: none;
		appearance: none;
		margin: 25px;
	}
	ul img {
		height: 30px;
		width: 30px;
		margin-right: 10px;
	}
	ul a {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		appearance: none;
		text-decoration: none;
		-webkit-filter: invert(1);
		filter: invert(1);
	}
	@media (max-width: 830px) {
		margin-left: -10vw;
	}
`;
