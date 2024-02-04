import styles from "./cardStyles.module.css";

function Cards({ goods, handleChange, handleButton }) {
	const listItems = goods.map((good) => {
		return (
			<li key={good.id}>
				<img className={styles.img} src={good.image}></img>
				<h2 className="good-name">{good.title}</h2>
				<h2>{good.price}</h2>
				<p>{good.description}</p>
				<span data-name={good.title} data-price={good.price}>
					<button
						type="button"
						data-change={-1}
						onClick={handleButton}
					>
						-1
					</button>
					<input
						className="value"
						type="number"
						min={0}
						onChange={handleChange}
					></input>
					<button
						type="button"
						data-change={1}
						onClick={handleButton}
					>
						+1
					</button>
				</span>
			</li>
		);
	});
	return <ul>{listItems}</ul>;
}

export default Cards;
