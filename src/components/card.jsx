const defaultImgPath = "https://placehold.co/600x400?text=Sono+un+placeholder";
import Button from "./button";

export default function Card({ id, title, image, content, tags, published }) {
	const tagsPost = tags.join(" ");
	const tagsColor = {
		html: "red",
		css: "blue",
		js: "green",
		php: "yellow",
	};

	return (
		<div className="card">
			<img
				src={image || defaultImgPath}
				className="card-img-top img-fluid mx-auto"
				alt="montagna"
			/>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="card-text">{content}</p>
				<p className="card-text">
					Tags:{" "}
					{tags.map((tag, index) => (
						<span key={index} style={{ color: tagsColor[tag] }}>
							{tag}
						</span>
					))}
				</p>
				<Button />
			</div>
		</div>
	);
}
