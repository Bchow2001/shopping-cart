import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import "./App.css";

function App() {
	const [items, setItems] = useState([]);
	const { name } = useParams();

	function handleChange(e) {
		const updatedItems = [...items];
		const itemName = e.target.getAttribute("data-name");
		const itemPrice = e.target.getAttribute("data-price");
		const quantity = e.target.valueAsNumber;
		if (updatedItems.some((ele) => ele.name === itemName)) {
			const itemIndex = updatedItems.findIndex(
				(e) => e.name === itemName,
			);
			updatedItems[itemIndex].quantity = quantity;
		} else {
			updatedItems.push({
				name: itemName,
				price: itemPrice,
				quantity: quantity,
			});
		}
		setItems([...updatedItems]);
	}
	return (
		<>
			<NavBar items={items} />
			<button onClick={() => console.log(items)}>item</button>
			{name === "home" ? (
				<HomePage />
			) : name === "shop" ? (
				<ShopPage handleChange={handleChange} />
			) : (
				<HomePage />
			)}
		</>
	);
}

export default App;
