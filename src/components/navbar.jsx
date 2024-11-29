import { posts } from "../data/posts";

export default function Navbar() {
	return (
		<>
			{posts
				// .filter(
				// 	(post) =>

				// )
				.map((post) => (
					<li key={post.id}>{post.tags.join(" ")}</li>
				))}
		</>
	);
}
