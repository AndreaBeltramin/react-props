import Navbar from "./navbar";
export default function Header() {
	return (
		<header>
			<h1 className="text-center py-4 fw-semibold">Il mio blog</h1>
			<ul className="py-4">
				<Navbar />
			</ul>
		</header>
	);
}
