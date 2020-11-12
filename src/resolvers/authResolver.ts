import { authCheck } from '../helpers/auth';

const me = (parent, args, { req, res, next }) => {
  authCheck(req, res, next);
  return 'Paulo';
};

export = {
  Query: {
    me,
  },
};
