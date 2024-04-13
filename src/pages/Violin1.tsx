import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const violin1Sections: SectionProps[] = [
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
	{
		infoname: "I2",
		title: "Bar 22-25",
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
				title: "Audio reference",
				/* text: "1 minute", */
				source: "/path/to/audio/exampleAudio.mp3",
			},
		],
	},
	{
		infoname: "I3",
		title: "Bar 32-35",
		text: "Exploratory section with a focus on dynamics.",
		media: [
			{
				type: "video",
				title: "Video explanation",
				text: "1 minute",
				source: "https://www.youtube.com/embed/exampleVideoId",
			},
			{
				type: "audio",
				title: "Audio reference",
				/* text: "1 minute", */
				source: "/path/to/audio/exampleAudio.mp3",
			},
		],
	},
	// Add more sections as needed
];

const Violin1: React.FC = () => {
	return <InstrumentPart name="Violin 1" sections={violin1Sections} />;
};

export default Violin1;
