const products = [
	{
		id: 'iphone',
		name: 'iPhone 14 pro Max',
		price: 1200,
		reviews: [
			{
				rating: 12.2,
			},
		],
	},
	{
		id: 'macbook',
		name: 'MacBook Air',
		price: 1500,
		reviews: [
			{
				rating: 13.2,
			},
		],
	},
];

function getProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	return products.filter(
		(product) => product.price >= min && product.price <= max
	);
}

function getProductById(id) {
	const [value] = products.filter((product) => product.id === id);
	return value;
}

function addNewProduct(id, name, price) {
	const newProduct = {
		id,
		name,
		price,
		reviews: [],
	};
	products.push(newProduct);

	return newProduct;
}
module.exports = {
	getProducts,
	getProductsByPrice,
	getProductById,
	addNewProduct,
};
