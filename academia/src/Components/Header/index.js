import React from "react";
import { HeaderDiv, HeaderTitle, Logo } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";

function Header({ title }) {
	return (
		<>
			<HeaderDiv>
				<Logo></Logo>
				<HeaderTitle>{title}</HeaderTitle>
			</HeaderDiv>
		</>
	);
}

export default Header;
