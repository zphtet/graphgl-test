const {
	getProducts,
	getProductsByPrice,
	getProductById,
	addNewProduct,
} = require('./products.model');
module.exports = {
	Query: {
		products: async () => {
			console.log(`Getting products`);
			return await Promise.resolve(getProducts());
		},
		productsByPrice: (_, { min, max }) => {
			console.log('Filter Products By Price');
			return getProductsByPrice(min, max);
		},
		productById: (_, { id }) => {
			console.log('Get Product By Id');
			return getProductById(id);
		},
	},
	Mutation: {
		addNewProduct: (_, { id, name, price }) => {
			console.log('Added New Product');
			return addNewProduct(id, name, price);
		},
	},
};
