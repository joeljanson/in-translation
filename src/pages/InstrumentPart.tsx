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
			<div className="row col-12">
				{sections.map((section, index) => (
					<Section key={index} {...section} />
				))}
			</div>
		</div>
	);
};
