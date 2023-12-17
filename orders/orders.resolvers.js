const { getOrders } = require('./orders.model');
module.exports = {
	Query: {
		orders: async () => {
			console.log(`Getting orders`);
			return await Promise.resolve(getOrders());
		},
	},
};
