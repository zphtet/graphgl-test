const orders = [
	{
		id: 1,
		confirmed: true,
		date: 'Feb 6 2024',
	},
	{
		id: 1,
		confirmed: true,
		date: 'April 6 2024',
	},
];

function getOrders() {
	return orders;
}

module.exports = {
	getOrders,
};
