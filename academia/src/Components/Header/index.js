import React from "react";
import { HeaderDiv, HeaderTitle, Logo, Menu } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";
import Button from "../Button";

function Header({ title }) {
	return (
		<>
			<HeaderDiv>
				<Logo></Logo>
				<HeaderTitle>Academia da Flávia</HeaderTitle>
				<Menu>
					<Button title={"Home"} routes="/Home"></Button>
					<Button title={"Perfil"} routes="/Perfil"></Button>
					<Button title={"Login"} routes="/Login"></Button>
				</Menu>
			</HeaderDiv>
		</>
	);
}

export default Header;
