import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import "./App.css";

function App() {
	const [items, setItems] = useState([]);
	const { name } = useParams();
	return (
		<>
			<NavBar items={items} />
			{name === "home" ? (
				<HomePage />
			) : name === "shop" ? (
				<ShopPage />
			) : (
				<HomePage />
			)}
		</>
	);
}

export default App;
