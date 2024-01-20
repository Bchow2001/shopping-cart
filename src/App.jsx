import { useState } from "react";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

function App() {
	const [count, setCount] = useState([]);

	return (
		<>
			<NavBar items={count} />
			<HomePage />
		</>
	);
}

export default App;
