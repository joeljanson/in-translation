import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const doubleBassSections: SectionProps[] = [
	{
		infoname: "I1",
		title: "Takt 12-15",
		text: "Exploratory section with a focus on dynamics.",
		media: [
			{
				type: "video",
				title: "Video explanation",
				text: "1 minute",
				source:
					"https://www.youtube-nocookie.com/embed/Dptx55JLQGE?si=3Z5Tno6LilosvD07",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				/* text: "1 minute", */
				source: "/path/to/audio/exampleAudio.mp3",
			},
		],
	},

	// Add more sections as needed
];

const DoubleBass: React.FC = () => {
	return <InstrumentPart name="Kontrabas" sections={doubleBassSections} />;
};

export default DoubleBass;
