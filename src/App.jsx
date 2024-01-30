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
		console.log(e.target.previousSibling);
	}
	return (
		<>
			<NavBar items={items} />
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
