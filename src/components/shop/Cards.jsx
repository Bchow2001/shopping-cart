import styles from "./cardStyles.module.css";

function Cards({ goods, onChange }) {
	const listItems = goods.map((good) => {
		return (
			<li key={good.id}>
				<img className={styles.img} src={good.image}></img>
				<h2 className="good-name">{good.title}</h2>
				<h2>{good.price}</h2>
				<p>{good.description}</p>
				<input type="number" onChange={onChange}></input>
			</li>
		);
	});
	return <ul>{listItems}</ul>;
}

export default Cards;
