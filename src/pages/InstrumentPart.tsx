import React from "react";
import { Section, SectionProps } from "./Section";
import { MediaEmbed, MediaProps } from "./MediaEmbed";

type InstrumentPartProps = {
	name: string;
	sections: SectionProps[];
};

export const InstrumentPart: React.FC<InstrumentPartProps> = ({
	name,
	sections,
}) => {
	return (
		<div className="container mt-4 justify-content-center align-items-center d-flex">
			<h1 className="text-center mb-4">{name}</h1>
			<p className="text-center mb-4">
				Nedan följer förklaringar till motsvarande platser i partituret. Om
				något ändå skulle vara oklart, hör av er till{" "}
				<a
					target="_blank"
					href="mailTo:joel.janson.johansen@gmail.com"
					rel="noreferrer"
				>
					joel.janson.johansen@gmail.com
				</a>
				<br></br>
				<br></br>
				Det kan verka vara mycket material men det tar max 10 minuter att titta
				igenom allt material. Inledningsvis finns här en introduktionsvideo som
				bör tittas på först.
				<div className="intro-iframe">
					<iframe
						title={"Introduction"}
						className="embed-responsive-item"
						src={
							"https://www.youtube-nocookie.com/embed/Dptx55JLQGE?si=3Z5Tno6LilosvD07"
						}
						allowFullScreen
					></iframe>
				</div>
			</p>
			<div className="row">
				{sections.map((section, index) => (
					<Section key={index} {...section} />
				))}
			</div>
		</div>
	);
};
