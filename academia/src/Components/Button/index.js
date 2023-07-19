import React from "react";
import { ButtonDiv } from "./styles";
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
