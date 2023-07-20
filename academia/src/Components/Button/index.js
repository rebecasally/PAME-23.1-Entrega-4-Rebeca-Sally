import React from "react";
import { ButtonDiv, AltButton } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";
import { Link } from "react-router-dom";

function Button(props) {
	return (
		<>
			<ButtonDiv>
				<Link to={props.routes}>{props.title}</Link>
			</ButtonDiv>
		</>
	);
}

export default Button;

function AltButtonDiv(props) {
	return (
		<>
			<AltButton>
				<Link to={props.routes}>{props.title}</Link>
			</AltButton>
		</>
	);
}

export { AltButtonDiv };
