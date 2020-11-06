import { posts } from '../temp';

// Queries
const totalPost = () => posts.length;
const allPosts = () => posts;

// Mutations
const newPost = (parent, args) => {
  const { title, description } = args;

  const post = {
    id: posts.length + 1,
    title,
    description,
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
