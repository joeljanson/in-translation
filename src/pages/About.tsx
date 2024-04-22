import React from "react";

const About: React.FC = () => {
	return (
		<div>
			<div className="container col-md-6 mt-4 justify-content-center align-items-center d-flex">
				<h1 className="text-center mb-4">{"About"}</h1>
				<p className="text-center mb-4">
					På denna sida finns förklaringar till noterat material i partituret.
					Om något ändå skulle vara oklart, hör av er till{" "}
					<a
						target="_blank"
						href="mailTo:joel.janson.johansen@gmail.com"
						rel="noreferrer"
					>
						joel.janson.johansen@gmail.com
					</a>
					<br></br>
					<br></br>
					Det kan verka vara mycket material men det tar inte så lång tid att
					titta igenom allt material. Inledningsvis finns här en
					introduktionsvideo som bör tittas på först.
					<div className="intro-iframe">
						<iframe
							title={"Introduction"}
							className="embed-responsive-item"
							src={"https://www.youtube-nocookie.com/embed/OCmPRYWoBnY"}
							allowFullScreen
						></iframe>
					</div>
				</p>
				<p>Nedan finns en digital reproduktion av verket (ej komplett)</p>
				<audio controls className="w-100">
					<source
						src={"/in-translation/audio/In translation - digital render.mp3"}
						type="audio/mpeg"
					/>
					Your browser does not support the audio element.
				</audio>
			</div>
		</div>
	);
};

export default About;
