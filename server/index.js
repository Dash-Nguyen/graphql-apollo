import bodyParser from 'body-parser';
import cors from 'cors';
import expressJwt from 'express-jwt';
import { HOST_URL } from './src/config';
//
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
//
import resolvers from './src/graphql/resolvers/index';
import typeDefs from './src/graphql/schemas/index';
import mongoose from 'mongoose';
import config from './src/config/index';

//  Express app

const startServer = async () => {
	const port = process.env.PORT || 3004;
	const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

	const app = new express();
	app.use(
		cors(),
		bodyParser.json(),
		expressJwt({
			secret: jwtSecret,
			credentialsRequired: false
		})
	);
	// const sqlDataBase = new SQLDataBase(dbConfig);

	const mongooseDB = await mongoose.connect(config.uris, {
		useNewUrlParser: config.useNewUrlParser,
		useUnifiedTopology: config.useUnifiedTopology,
		useCreateIndex: config.useCreateIndex
	});

	// Apollo app
	const apolloServer = new ApolloServer({ typeDefs, resolvers, dataSources: () => ({ mongooseDB }) });

	/* Use middleware*/
	apolloServer.applyMiddleware({ app, path: HOST_URL });

	// App start
	app.listen(port, () => console.info(`Server started on  port ${port}`));
};

startServer();
