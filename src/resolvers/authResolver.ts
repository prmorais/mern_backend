import { authCheck } from '../helpers/auth';

const me = async (parent, args, { req }) => {
  await authCheck(req);
  return 'Paulo';
};

export = {
  Query: {
    me,
  },
};
