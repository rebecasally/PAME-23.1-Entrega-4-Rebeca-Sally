import React from "react";
import { GlobalStyle } from "../../Constants/Theme/styles";
import { Background, Imagem, MainContainer } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Home() {
	return (
		<>
			<Background>
				<Header></Header>
				<Imagem></Imagem>
				<MainContainer>
					<h1> Bem-vindos à Academia da Flávia!</h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper, tellus vestibulum
					dignissim varius, ipsum tortor porta nibh, posuere pellentesque tellus arcu ac ligula.
					Mauris imperdiet, lectus ut semper mollis, erat magna facilisis mauris, id porttitor
					sapien arcu in tortor. Phasellus dignissim augue vitae urna mattis, eleifend venenatis
					arcu tincidunt. Phasellus eget quam vel ipsum venenatis bibendum. Pellentesque ultricies
					tincidunt nisl, at rhoncus eros imperdiet eget. Maecenas fringilla et tellus in molestie.
					Aenean commodo pretium dui non tincidunt. Praesent congue imperdiet metus, in gravida
					libero hendrerit condimentum. Aliquam venenatis dolor vitae erat imperdiet placerat. Sed
					non erat ultricies nibh tincidunt hendrerit nec eget diam. Nunc sodales pharetra sem.
					Fusce euismod ante eget ex cursus, non congue dui sagittis. Fusce vitae nulla felis.
					Maecenas mattis elementum posuere.
				</MainContainer>
				<Footer></Footer>
			</Background>
		</>
	);
}

export default Home;
