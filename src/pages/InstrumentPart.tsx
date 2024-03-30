import React from "react";
import { Section, SectionProps } from "./Section";

type InstrumentPartProps = {
	name: string;
	sections: SectionProps[];
};

export const InstrumentPart: React.FC<InstrumentPartProps> = ({
	name,
	sections,
}) => {
	return (
		<div className="container mt-4">
			<h1 className="text-center mb-4">{name}</h1>
			<div className="row">
				{sections.map((section, index) => (
					<Section key={index} {...section} />
				))}
			</div>
		</div>
	);
};
