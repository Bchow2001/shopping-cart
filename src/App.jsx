import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./components/Fetch";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import CartPage from "./components/cart/CartPage";
import "./App.css";

function App() {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);
	const { name } = useParams();

	useEffect(() => {
		Fetch()
			.then((response) => {
				let responseArr = [...response];
				responseArr = responseArr.map((obj) => ({
					...obj,
					quantity: 0,
				}));
				setItems([...responseArr]);
			})
			.catch((error) => setError(error));
	}, []);

	function handleChange(e) {
		let updatedItems = [...items];
		const itemName = e.target.parentElement.getAttribute("data-name");
		const quantity = e.target.value;

		const itemIndex = updatedItems.findIndex((e) => e.title === itemName);
		updatedItems[itemIndex].quantity = quantity;

		setItems([...updatedItems]);
	}

	function handleButton(e) {
		let updatedItems = [...items];
		const itemChange = parseInt(e.target.getAttribute("data-change"));
		const itemName = e.target.parentElement.getAttribute("data-name");
		const itemIndex = updatedItems.findIndex((e) => e.title === itemName);

		if (itemChange === 1) {
			updatedItems[itemIndex].quantity++;
			setItems([...updatedItems]);
		} else if (itemChange === -1) {
			const input = e.target.nextSibling;
			if (isNaN(input.valueAsNumber)) {
				return;
			} else {
				if (input.valueAsNumber !== 0) {
					updatedItems[itemIndex].quantity--;
					setItems([...updatedItems]);
				}
			}
		}
	}

	return (
		<>
			<NavBar items={items} />
			{name === "home" ? (
				<HomePage />
			) : name === "shop" ? (
				<ShopPage
					items={items}
					error={error}
					handleChange={handleChange}
					handleButton={handleButton}
				/>
			) : name === "cart" ? (
				<CartPage items={items} />
			) : (
				<HomePage />
			)}
		</>
	);
}

export default App;
