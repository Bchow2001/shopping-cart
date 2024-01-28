function Cards({ goods, onChange }) {
	const listItems = goods.map((good) => {
		return (
			<li key={good.id}>
				<img src={good.image}></img>
				<h2>{good.title}</h2>
				<h2>{good.price}</h2>
				<p>{good.description}</p>
				<input type="number"></input>
			</li>
		);
	});
	return <ul>{listItems}</ul>;
}

export default Cards;
