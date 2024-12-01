import { posts } from "../data/posts";

export default function Navbar() {
	const newArray = posts.flatMap((post) => post.tags);
	//console.log(newArray);

	const arrayTags = newArray.filter(
		(value, index, self) => self.indexOf(value) === index
	);
	//console.log(arrayTags);

	return (
		<>
			{arrayTags.map((tag, index) => (
				<li key={index}>{tag}</li>
			))}
		</>
	);
}
