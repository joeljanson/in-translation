import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const celloSections: SectionProps[] = [
	{
		title: "Slow oscillating dynamics",
		text: "Videoförklaring för vad jag menar med slow oscillating dynamics",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/eLJi17rU-Ms",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source:
					"/in-translation/audio/14 Violoncello - Slow oscillating dynamics.mp3",
			},
		],
	},
	{
		title: "Bokstav D",
		text: "Videoförklaring för notation vid bokstav D",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/uwinIwG8fhw",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/15 - Violoncello - D.mp3",
			},
		],
	},
	{
		title: "Takt 58",
		text: "Videoförklaring för notation i takt 58",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/8AtRuO-XMOI",
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
		text: "Videoförklaring för notation vid bokstav G",
		media: [
			{
				type: "video",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/lw_3kR1liHM",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/17 - Violoncello - G.mp3",
			},
		],
	},

	// Add more sections as needed
];

const Cello: React.FC = () => {
	return <InstrumentPart name="Cello" sections={celloSections} />;
};

export default Cello;
