import { gql } from 'apollo-server-express';

const auth = gql`
type Query {
  me: String!
}
`;

export default auth;
