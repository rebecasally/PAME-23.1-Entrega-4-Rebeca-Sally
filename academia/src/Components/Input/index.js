import React from "react";
import { InputDiv } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";

function Input(props) {
	return (
		<>
			<InputDiv>
				<input
					type={props.tipo}
					placeholder={props.content}
					onChange={props.onChange}
					id={props.id}
					value={props.value}
				></input>
			</InputDiv>
		</>
	);
}

export default Input;
