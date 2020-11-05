import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';

import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

// Express server
const app = express();

// Middlewares express
app.use(express.json());
app.use(morgan('dev'));

// Types query/mutation/subscription
const typeDefs = `
type Query {
  totalPosts: Int!
}
`;

// Resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

// GraphQL Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// applyMiddleware - metódo que conecta ApolloServer a um framework HTTP específico
apolloServer.applyMiddleware({
  app,
});

// Server
// const httpSever = http.createServer(app);

// Rest endpoint
app.get('/rest', (req, res) => {
  res.json({
    data: 'Endpoint raiz rest',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
  console.log(`Servidor GraphQL rodando na porta:${process.env.PORT}${apolloServer.graphqlPath}`);
});
