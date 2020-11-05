import { gql } from 'apollo-server-express';

const post = gql`
type Query {
  totalPosts: Int!
}
`;

export default post;
