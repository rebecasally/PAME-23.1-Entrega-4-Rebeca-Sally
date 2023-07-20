import React from "react";
import { InputDiv } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";

function Input(props) {
	return (
		<>
			<InputDiv
				type={props.tipo}
				placeholder={props.content}
				onChange={props.onChange}
				id={props.id}
				value={props.value}
			></InputDiv>
		</>
	);
}

export default Input;
