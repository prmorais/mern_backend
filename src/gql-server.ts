import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';

dotenv.config();


// Types query/mutation/subscription

const typeDefs = `
type Query {
	totalPosts: Int!
}
`;

// Resolvers
const resolvers = {
	Query: {
		totalPosts: () => 42
	}
};

// GraphQL Server

const apolloServer = new ApolloServer({
	typeDefs, resolvers,
});

apolloServer.listen(process.env.PORT, () => console.log('Servidor Apollo rodando na porta:', process.env.PORT));