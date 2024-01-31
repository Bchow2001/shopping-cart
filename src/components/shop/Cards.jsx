import styles from "./cardStyles.module.css";

function Cards({ goods, onChange }) {
	function addOne(e) {
		let val = e.target.previousSibling.valueAsNumber;
		if (isNaN(val)) {
			e.target.previousSibling.value = 1;
		} else {
			e.target.previousSibling.value = val += 1;
		}
	}
	const listItems = goods.map((good) => {
		return (
			<li key={good.id}>
				<img className={styles.img} src={good.image}></img>
				<h2 className="good-name">{good.title}</h2>
				<h2>{good.price}</h2>
				<p>{good.description}</p>
				<span>
					<button type="button">-1</button>
					<input
						type="number"
						min={0}
						onChange={onChange}
						data-name={good.title}
						data-price={good.price}
					></input>
					<button type="button" onClick={addOne}>
						+1
					</button>
				</span>
			</li>
		);
	});
	return <ul>{listItems}</ul>;
}

export default Cards;
