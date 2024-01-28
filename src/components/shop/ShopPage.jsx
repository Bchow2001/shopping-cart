import Cards from "./Cards";
import Fetch from "./Fetch";
import { useState, useEffect } from "react";

function ShopPage() {
	const [goods, setGoods] = useState([]);
	useEffect(() => {
		Fetch().then((response) => {
			setGoods([...response]);
			console.log("fetching");
		});
	}, []);
	return (
		<>
			<h1>Shop</h1>
			<Cards goods={goods} />
		</>
	);
}

export default ShopPage;
