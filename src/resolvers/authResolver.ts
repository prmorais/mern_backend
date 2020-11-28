import shortid from 'shortid';
// eslint-disable-next-line no-unused-vars
import { DateTimeResolver } from 'graphql-scalars';

import { authCheck } from '../helpers/auth';
import User from '../models/userModel';

const profile = async (parent: any, args: any, { req }: any) => {
  const currentUser = await authCheck(req);
  return User.findOne({ email: currentUser.email }).exec();
};

const publicProfile = async (parent: any, args: any) => User.findOne({ username: args.username }).exec();

const allUsers = async () => User.find().exec();

const userCreate = async (parent: any, args: any, { req }) => {
  const currentUser = await authCheck(req);
  const user = await User.findOne({ email: currentUser.email });

  return user || new User({
    email: currentUser.email,
    username: shortid.generate(),
  }).save();
};

const userUpdate = async (parent: any, args: any, { req }) => {
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
    profile,
    publicProfile,
    allUsers,
  },
  Mutation: {
    userCreate,
    userUpdate,
  },
};
