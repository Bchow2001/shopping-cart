function Cards({ goods, onChange }) {
	const listItems = goods.map((good) => {
		return (
			<li key={good.name}>
				<img src={good.imgSrc}></img>
				<h2>{good.name}</h2>
				<h2>{good.price}</h2>
				<p>{good.desc}</p>
				<input type="number"></input>
			</li>
		);
	});
}
