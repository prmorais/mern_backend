// eslint-disable-next-line no-unused-vars
import { DateTimeResolver } from 'graphql-scalars';

import { authCheck } from '../helpers/auth';
import { posts } from '../temp';

interface IInput {
  title: string,
  description: string,
}

interface IPostInput {
  input: IInput
}

// Queries
const totalPost = () => posts.length;
const allPosts = async (parent, args, { req }) => {
  await authCheck(req);
  return posts;
};

// Mutations
const newPost = (parent, args: IPostInput) => {
  // const { title, description } = args.input;

  const post = {
    id: posts.length + 1,
    ...args.input,
    // title,
    // description,
  };
  posts.push(post);

  return post;
};

export = {
  Query: {
    totalPost,
    allPosts,
  },

  Mutation: {
    newPost,
  },
};
