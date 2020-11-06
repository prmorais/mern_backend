import { posts } from '../temp';

const totalPost = () => posts.length;
const allPosts = () => posts;

export = {
  Query: {
    totalPost,
    allPosts,
  },
};
