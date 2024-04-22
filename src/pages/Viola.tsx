import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const violaSections: SectionProps[] = [
	{
		title: "Slow oscillating dynamics",
		text: "Videoförklaring för vad jag menar med slow oscillating dynamics",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/m9ENtGGFvh4",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/slow-oscillating-dynamics.mp3",
			},
		],
	},
	{
		title: "Bokstav E",
		text: "Videoförklaring för vad jag menar vid bokstav E",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source:
					"https://www.youtube-nocookie.com/embed/https://youtu.be/6JUWYs9iL_w",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/2 Viola - Bokstav E (ljudfil).mp3",
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
				source:
					"https://www.youtube-nocookie.com/embed/https://youtu.be/Toj3WCscy90",
			},
			/* {
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/2 Viola - Bokstav E (ljudfil).mp3",
			}, */
		],
	},
	{
		title: "Slutet",
		text: "Videoförklaring för vad jag menar i slutet",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source:
					"https://www.youtube-nocookie.com/embed/https://youtu.be/CMq54uyUII4",
			},
			/* {
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/2 Viola - Bokstav E (ljudfil).mp3",
			}, */
		],
	},
	// Add more sections as needed
];

const Viola: React.FC = () => {
	return <InstrumentPart name="Viola" sections={violaSections} />;
};

export default Viola;
