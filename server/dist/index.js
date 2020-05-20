'use strict';

var bodyParser = require('data/node_modules/body-parser');
var cors = require('data/node_modules/cors');
var express = require('data/node_modules/express');
var expressJwt = require('data/node_modules/express-jwt');
var fs = require('fs');

var _require = require('data/node_modules/apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var _require2 = require('data/node_modules/merge-graphql-schemas'),
    mergeTypes = _require2.mergeTypes,
    fileLoader = _require2.fileLoader;

var path = require('path');
//
var port = process.env.PORT || 3004;
var jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

//  Express app
var app = new express();
app.use(cors(), bodyParser.json(), expressJwt({
	secret: jwtSecret,
	credentialsRequired: false
}));

// Apollo app
var schemas = fileLoader(path.join(__dirname, './schemas'));
var typeDefs = mergeTypes(schemas);

var resolvers = {};

var apolloServer = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

/* Use middleware*/
apolloServer.applyMiddleware({ app: app, path: '/hris-apollo/v1' });

app.listen(port, function () {
	return console.info('Server started on port ' + port);
});