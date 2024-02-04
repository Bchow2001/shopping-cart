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
		let updatedItems = [...items];
		const itemName = e.target.parentElement.getAttribute("data-name");
		const itemPrice = e.target.parentElement.getAttribute("data-price");
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
		updatedItems = updatedItems.filter(
			(item) => !isNaN(item.quantity) && item.quantity !== 0,
		);
		setItems([...updatedItems]);
	}

	function handleButton(e) {
		const itemChange = parseInt(e.target.getAttribute("data-change"));
		if (itemChange === 1) {
			const input = e.target.previousSibling;
			if (isNaN(input.valueAsNumber)) {
				input.valueAsNumber = 1;
			} else {
				input.valueAsNumber += itemChange;
			}
			input.dispatchEvent(new Event("change", { bubbles: true }));
		} else if (itemChange === -1) {
			const input = e.target.nextSibling;
			if (isNaN(input.valueAsNumber)) {
				return;
			} else {
				if (input.valueAsNumber !== 0) {
					input.valueAsNumber += itemChange;
					input.dispatchEvent(new Event("change", { bubbles: true }));
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
					handleChange={handleChange}
					handleButton={handleButton}
				/>
			) : (
				<HomePage />
			)}
		</>
	);
}

export default App;
