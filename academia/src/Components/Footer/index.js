import React from "react";
import { Contato, FooterDiv, Info, NomeInfo, Socials } from "./styles";
import { GlobalStyle } from "../../Constants/Theme";

function Footer() {
	return (
		<>
			<FooterDiv>
				<Info>
					<li>
						<ul>
							<NomeInfo>Endereço</NomeInfo>
						</ul>
						<ul>Rua Central Nº 0, Mesquita</ul>
						<ul>Rio de Janeiro - RJ</ul>
						<ul>CEP: 12345-678</ul>
					</li>
				</Info>
				<Contato>
					<li>
						<ul>
							<NomeInfo>Contato</NomeInfo>
						</ul>
						<ul>(21) 98765-4321</ul>
						<ul>email@gmail.com</ul>
					</li>
				</Contato>
				<Socials>
					<li>
						<ul>
							<a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
								<img src={require("../../Assets/instagram.png")} alt="Instagram" />
								Instagram
							</a>
						</ul>
						<ul>
							<a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
								<img src={require("../../Assets/facebook.png")} alt="Facebook" />
								Facebook
							</a>
						</ul>
						<ul>
							<a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
								<img src={require("../../Assets/whatsapp.png")} alt="Whatsapp" />
								Whatsapp
							</a>
						</ul>
					</li>
				</Socials>
			</FooterDiv>
		</>
	);
}

export default Footer;
