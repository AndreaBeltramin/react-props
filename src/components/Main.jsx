import Card from "./card";
import { posts } from "../data/posts";

export default function Main() {
	return (
		<main>
			<div className="container">
				{posts
					.filter((post) => post.published == true)
					.map((post) => (
						<Card
							key={post.id}
							id={post.id}
							title={post.title}
							image={post.image}
							content={post.content}
							tags={post.tags}
							published={post.published}
						/>
					))}
			</div>
		</main>
	);
}
