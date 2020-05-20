import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import expressJwt from 'express-jwt';
import { ApolloServer } from 'apollo-server-express';
//
import resolvers from './src/graphql/resolvers/index';
import typeDefs from './src/graphql/schemas/index';
//
const port = process.env.PORT || 3004;
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

//  Express app
const app = new express();
app.use(
	cors(),
	bodyParser.json(),
	expressJwt({
		secret: jwtSecret,
		credentialsRequired: false
	})
);
// Apollo app
const apolloServer = new ApolloServer({ typeDefs, resolvers });

/* Use middleware*/
apolloServer.applyMiddleware({ app, path: '/hris-apollo/v1' });

app.listen(port, () => console.info(`Server started on port ${port}`));
