function Fetch() {
	return fetch("https://fakestoreapi.com/products").then((response) => {
		if (response.status >= 400) {
			throw new Error("server error");
		}
		return response.json();
	});
}

export default Fetch;
