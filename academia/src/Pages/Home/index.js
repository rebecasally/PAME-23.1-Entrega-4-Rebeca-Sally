import React from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, Imagem, MainContainer, Pacote, Pacotes } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Button, { AltButtonDiv2 } from "../../Components/Button";

function Home() {
	return (
		<>
			<Background>
				<Header></Header>
				<Imagem></Imagem>
				<MainContainer>
					<h1> Bem-vindos à Color Gym!</h1>O conceito principal da academia é trazer cores e alegria
					para o ambiente fitness, criando um espaço onde as pessoas se sintam motivadas a alcançar
					seus objetivos de saúde e bem-estar. A academia será livre de qualquer forma de
					preconceito e discriminação, promovendo um ambiente seguro para todos, independentemente
					de sua orientação sexual ou identidade de gênero.
					<Pacotes>
						<Pacote>
							<h2>Pacote 1</h2>
							<li>
								<ul>
									Acesso ilimitado às <br />
									dependências da academia
								</ul>
								<ul>Aulas de Dança</ul>
								<ul>Treino Personalizado</ul>
								<ul>
									<h2>R$120,00</h2>
								</ul>
							</li>
							<AltButtonDiv2 title={"Assinar"} routes="/Cadastro"></AltButtonDiv2>
						</Pacote>
						<Pacote>
							<h2>Pacote 2</h2>
							<li>
								<ul>
									Acesso ilimitado às <br />
									dependências da academia
								</ul>
								<ul>Acesso à todas as aulas</ul>
								<ul>Treino Personalizado</ul>
								<ul>Cadeira de Massagem</ul>
								<ul>
									<h2>R$140,00</h2>
								</ul>
							</li>
							<AltButtonDiv2 title={"Assinar"} routes="/Cadastro"></AltButtonDiv2>
						</Pacote>
						<Pacote>
							<h2>Pacote 3</h2>
							<li>
								<ul>
									Acesso ilimitado às <br />
									dependências da academia
								</ul>
								<ul>Acesso à todas as aulas</ul>
								<ul>Treino Personalizado e Nutricionista</ul>
								<ul>Cadeira de Massagem</ul>
								<ul>
									<h2>R$180,00</h2>
								</ul>
							</li>
							<AltButtonDiv2 title={"Assinar"} routes="/Cadastro"></AltButtonDiv2>
						</Pacote>
					</Pacotes>
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Home;
