import React from "react";
import { MediaEmbed, MediaProps } from "./MediaEmbed";

export type SectionProps = {
	title: string;
	text: string;
	media: MediaProps[];
};

export const Section: React.FC<SectionProps> = ({ title, text, media }) => {
	return (
		// Bootstrap grid classes for responsiveness
		<div className="col-lg-4 col-md-6">
			<div className="card my-3">
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p className="card-text">{text}</p>
					{media.map((m, index) => (
						<MediaEmbed key={index} {...m} />
					))}
				</div>
			</div>
		</div>
	);
};
