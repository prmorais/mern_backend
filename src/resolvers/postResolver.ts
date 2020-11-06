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
const allPosts = () => posts;

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
