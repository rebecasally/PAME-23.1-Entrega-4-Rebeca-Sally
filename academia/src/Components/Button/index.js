import React from "react";
import { ButtonDiv, AltButton, AltButton2 } from "./styles";
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

function AltButtonDiv2(props) {
	return (
		<>
			<AltButton2>
				<Link to={props.routes}>{props.title}</Link>
			</AltButton2>
		</>
	);
}

export { AltButtonDiv2 };
