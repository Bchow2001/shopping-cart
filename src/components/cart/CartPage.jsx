import styles from "../shop/cardStyles.module.css";
function CartPage({ items }) {
	const cartItems = items.map((good) => {
		if (good.quantity > 0 && !isNaN(good.quantity)) {
			console.log(good);
			return (
				<li key={good.id}>
					<img className={styles.img} src={good.image}></img>
					<h2 className="good-name">{good.title}</h2>
					<h2>{good.price}</h2>
					<h2>{good.quantity}</h2>
				</li>
			);
		}
	});
	const totalPrice = items.reduce((acc, { quantity, price }) => {
		console.log(acc);
		return quantity !== 0 && !isNaN(parseInt(quantity))
			? acc + parseInt(quantity) * parseInt(price)
			: acc;
	}, 0);
	return (
		<>
			<ul>{cartItems}</ul>
			<h1>{`Total Price: ${totalPrice}`}</h1>
		</>
	);
}

export default CartPage;
