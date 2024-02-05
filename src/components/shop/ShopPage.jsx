import Cards from "./Cards";
function ShopPage({ items, error, handleChange, handleButton }) {
	if (error) return <p>A network Error was detected</p>;

	return (
		<>
			<h1>Shop</h1>
			<Cards
				items={items}
				handleChange={handleChange}
				handleButton={handleButton}
			/>
		</>
	);
}

export default ShopPage;
