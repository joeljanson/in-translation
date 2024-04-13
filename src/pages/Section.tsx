import React from "react";
import { MediaEmbed, MediaProps } from "./MediaEmbed";

export type SectionProps = {
	infoname?: string;
	title: string;
	text: string;
	media: MediaProps[];
};

export const Section: React.FC<SectionProps> = ({
	infoname,
	title,
	text,
	media,
}) => {
	return (
		// Bootstrap grid classes for responsiveness
		<div className="col-lg-4 col-md-6">
			<div className="card text-center my-3">
				<div className="d-flex flex-column card-body justify-content-center align-items-center">
					<h2 className="info-name">{infoname}</h2>
					<p className="card-title">{title}</p>
					<p className="card-text">{text}</p>
					{media.map((m, index) => (
						<MediaEmbed key={index} {...m} />
					))}
				</div>
			</div>
		</div>
	);
};
