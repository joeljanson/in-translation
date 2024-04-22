import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const doubleBassSections: SectionProps[] = [
	{
		title: "Försättsblad",
		text: "Ett förlåt och en öppning.",
		media: [
			{
				type: "video",
				source: "https://www.youtube-nocookie.com/embed/b9PdL7GjC-Y",
			},
			/* {
				type: "audio",
				title: "Ljudande referens",
				text: "1 minute",
				source: "/path/to/audio/exampleAudio.mp3",
			}, */
		],
	},

	// Add more sections as needed
];

const DoubleBass: React.FC = () => {
	return <InstrumentPart name="Kontrabas" sections={doubleBassSections} />;
};

export default DoubleBass;
