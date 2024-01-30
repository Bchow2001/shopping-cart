import Cards from "./Cards";
import Fetch from "./Fetch";
import { useState, useEffect } from "react";

function ShopPage({ handleChange }) {
	const [error, setError] = useState(null);
	const [goods, setGoods] = useState([]);
	useEffect(() => {
		Fetch()
			.then((response) => {
				setGoods([...response]);
				console.log("fetching");
			})
			.catch((error) => setError(error));
	}, []);

	if (error) return <p>A network Error was detected</p>;

	return (
		<>
			<h1>Shop</h1>
			<Cards goods={goods} onChange={handleChange} />
		</>
	);
}

export default ShopPage;
