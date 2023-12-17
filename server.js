const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const app = express();

const typeArr = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArr = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));
const schema = makeExecutableSchema({
	typeDefs: typeArr,
	resolvers: resolverArr,
});
const root = {
	products: require('./products/products.model').getProducts(),
	orders: require('./orders/orders.model').getOrders(),
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
		// rootValue: root,
	})
);

app.get('/', (req, res) => {
	res.send(`GraphQl Testing`);
});
app.listen(8000, () => {
	console.log(`App is listening on port 8000`);
});
