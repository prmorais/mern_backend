import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import http from 'http';
import path from 'path';
import mongoose from 'mongoose';

// import {makeExecutableSchema} from 'graphql-tools';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

// import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

// Express server
const app = express();
// Middlewares express
// app.use(express.json());
// app.use(morgan('dev'));

// DB Mongo
const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.info('Mongo conectado com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao conectar o MongoAtlas!', error);
  }
};

// Executa a conexão com banco de dados
db();

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './typeDefs')));
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')));

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
