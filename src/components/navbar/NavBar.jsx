import { Link } from "react-router-dom";

function NavBar({ items }) {
	let count = items.reduce(
		(acc, { quantity }) => acc + parseInt(quantity),
		0,
	);
	if (isNaN(count)) {
		count = 0;
	}
	return (
		<>
			<Link to="/home">Home Page</Link>
			<Link to="/shop">Shop</Link>
			<Link to="/cart">Cart</Link>
			<h1>{count}</h1>
			<button onClick={() => console.log(items)}>items</button>
		</>
	);
}

export default NavBar;
