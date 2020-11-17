import shortid from 'shortid';

import { authCheck } from '../helpers/auth';
import User from '../models/userModel';

const me = async (parent: any, args: any, { req }) => {
  await authCheck(req);
  return 'Paulo';
};

const userCreate = async (parent: any, args: any, { req }) => {
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });

  return user || new User({
    email: currentUser.email,
    username: shortid.generate(),
  }).save();
};

const userUpdate = async (parent: any, args: any, { req }) => {
  console.log({ ...args.input });

  const currentUser = await authCheck(req);

  const updatedUser = await User.findOneAndUpdate(
    { email: currentUser.email },
    { ...args.input },
    { new: true },
  )
    .exec();

  return updatedUser;
};

export = {
  Query: {
    me,
  },
  Mutation: {
    userCreate,
    userUpdate,
  },
};
