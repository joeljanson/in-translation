import React from "react";
import { InstrumentPart } from "./InstrumentPart";
import { SectionProps } from "./Section";

// Example sections data for Violin 1
const violin2Sections: SectionProps[] = [
	{
		title: "Slow oscillating dynamics",
		text: "Videoförklaring för vad jag menar med slow oscillating dynamics",
		media: [
			{
				type: "video",
				title: "Slow oscillating dynamics",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/TfKtsfpe6Ew",
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
				title: "Takt 52",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/vTAPsBySVUo",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/6 Violin II - takt 52 (ljudfil).mp3",
			},
		],
	},
	{
		title: "Takt 58",
		text: "Videoförklaring för vad jag menar vid takt 58",
		media: [
			{
				type: "video",
				title: "Takt 58",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/UfQ-m2O5YHw",
			},
			{
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/greenwood-polymorphia.mp3",
			},
		],
	},
	{
		title: "Vid bokstav G",
		text: "Videoförklaring för vad jag menar vid bokstav G",
		media: [
			{
				type: "video",
				title: "Bokstav G",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/ug7K18wkQxE",
			},
			/* {
				type: "audio",
				title: "Ljudande referens",
				source: "/in-translation/audio/greenwood-polymorphia.mp3",
			}, */
		],
	},
	{
		title: "Takt 80",
		text: "Videoförklaring för vad jag menar vid takt 80",
		media: [
			{
				type: "video",
				title: "Takt 80",
				//text: "1 minute",
				source: "https://www.youtube-nocookie.com/embed/gQgGUgoe3l0",
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

const Violin2: React.FC = () => {
	return <InstrumentPart name="Violin 2" sections={violin2Sections} />;
};

export default Violin2;
