import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const violin1Sections: SectionProps[] = [
	{
		title: "Slow oscillating dynamics",
		text: "Videoförklaring för vad jag menar med slow oscillating dynamics",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/AL5y13ppIAI",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/slow-oscillating-dynamics.mp3",
			},
		],
	},
	{
		title: "Takt 52",
		text: "Videoförklaring för vad jag menar vid takt 52",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/d9tZeY-IkgI",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/11 Violin I - takt 52 (ljudfil).mp3",
			},
		],
	},
	{
		title: "Takt 58",
		text: "Videoförklaring för vad jag menar vid takt 58",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/G3c8FNnO93E",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/greenwood-polymorphia.mp3",
			},
		],
	},
	{
		title: "Bokstav G",
		text: "Videoförklaring för vad jag menar vid bokstav G",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/E7QmMNtAKuI",
			},
			/* {
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/greenwood-polymorphia.mp3",
			}, */
		],
	},
	// Add more sections as needed
];

const Violin1: React.FC = () => {
	return <InstrumentPart name="Violin 1" sections={violin1Sections} />;
};

export default Violin1;
