import { Link } from "react-router-dom";

function NavBar({ items }) {
	const count = items.length;
	return (
		<>
			<Link to="home">Home Page</Link>
			<Link to="shop">Shop</Link>
			<h1>{count}</h1>
		</>
	);
}

export default NavBar;
