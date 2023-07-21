import React from "react";
import { GlobalStyle } from "../../Constants/Theme";
import { TreinoDiv } from "./styles";

function Treino(props) {
	return (
		<>
			<TreinoDiv>
				<h2>{props.data.dia}</h2>
				<li>
					<ul>{props.data.exerc1}</ul>
					<ul>{props.data.exerc2}</ul>
					<ul>{props.data.exerc3}</ul>
					<ul>{props.data.exerc4}</ul>
				</li>
			</TreinoDiv>
		</>
	);
}

export default Treino;
