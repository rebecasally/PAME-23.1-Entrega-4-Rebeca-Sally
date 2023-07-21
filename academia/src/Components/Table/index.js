import React from "react";
import { GlobalStyle } from "../../Constants/Theme";
import { TabelaDiv } from "./styles";

const horarios = [
	{
		id: 0,
		exerc1: "Zumba",
		exerc2: "Zumba",
		exerc3: "Ginástica Localizada",
		exerc4: "Ginástica Localizada",
	},
	{
		id: 1,
		exerc1: "Yoga",
		exerc2: "Yoga",
		exerc3: "Spinning",
		exerc4: "Spinning",
	},
	{
		id: 2,
		exerc1: "Zumba",
		exerc2: "Zumba",
		exerc3: "Ginástica Localizada",
		exerc4: "Ginástica Localizada",
	},
	{
		id: 3,
		exerc1: "Yoga",
		exerc2: "Yoga",
		exerc3: "Spinning",
		exerc4: "Spinning",
	},
	{
		id: 4,
		exerc1: "Abdominal",
		exerc2: "Abdominal",
		exerc3: "Ginástica Localizada",
		exerc4: "Ginástica Localizada",
	},
	{
		id: 5,
		exerc1: "Zumba na praça",
		exerc2: "Zumba na praça",
		exerc3: "",
		exerc4: "",
	},
	{
		id: 6,
		exerc1: "Corrida",
		exerc2: "Corrida",
		exerc3: "",
		exerc4: "",
	},
];

function Tabela(props) {
	return (
		<>
			<TabelaDiv>
				<tr>
					<th className="titulo">Horários</th>
					<th>Segunda</th>
					<th>Terça</th>
					<th>Quarta</th>
					<th>Quinta</th>
					<th>Sexta</th>
					<th>Sábado</th>
					<th>Domingo</th>
				</tr>
				<tr>
					<td className="horarios">8h</td>
					{horarios.map((val, key) => {
						return <td key={key}>{val.exerc1}</td>;
					})}
				</tr>
				<tr>
					<td className="horarios">10h</td>
					{horarios.map((val, key) => {
						return <td key={key}>{val.exerc2}</td>;
					})}
				</tr>
				<tr>
					<td className="horarios">13h</td>
					{horarios.map((val, key) => {
						return <td key={key}>{val.exerc3}</td>;
					})}
				</tr>
				<tr>
					<td className="horarios">15h</td>
					{horarios.map((val, key) => {
						return <td key={key}>{val.exerc4}</td>;
					})}
				</tr>
			</TabelaDiv>
		</>
	);
}

export default Tabela;
