import React from "react";

export type MediaProps = {
	type: "video" | "audio";
	source: string;
	title?: string;
	text?: string;
};

export const MediaEmbed: React.FC<MediaProps> = ({
	type,
	source,
	title,
	text,
}) => {
	return (
		<div className="mb-4">
			{title && <h5 className="mt-3">{title}</h5>}
			{text && <p>{text}</p>}
			{type === "video" ? (
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						title={title}
						className="embed-responsive-item"
						src={source}
						allowFullScreen
					></iframe>
				</div>
			) : (
				<audio controls className="w-100">
					<source src={source} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
			)}
		</div>
	);
};
