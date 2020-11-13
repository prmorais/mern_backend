import shortid from 'shortid';

import { authCheck } from '../helpers/auth';
import User from '../models/userModel';

const me = async (parent, args, { req }) => {
  await authCheck(req);
  return 'Paulo';
};

const userCreate = async (parent, args, { req }) => {
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });

  return user || new User({
    email: currentUser.email,
    username: shortid.generate(),
  }).save();
};

export = {
  Query: {
    me,
  },
  Mutation: {
    userCreate,
  },
};
