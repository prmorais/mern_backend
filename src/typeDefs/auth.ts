import { gql } from 'apollo-server-express';

export = gql`
type Query {
  me: String!
}
`;
