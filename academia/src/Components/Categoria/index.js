import React from "react";
import { useState } from "react";
import { Categoria, Toggle } from "./styles";

const Collapsible = (props) => {
	const [open, setOPen] = useState(false);
	const toggle = () => {
		setOPen(!open);
	};

	return (
		<Categoria>
			<button onClick={toggle}>{props.label}</button>
			{open && <Toggle>{props.children}</Toggle>}
		</Categoria>
	);
};

export default Collapsible;
