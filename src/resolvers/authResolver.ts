import { authCheck } from '../helpers/auth';

const me = (parent, args, { req, res }) => {
  authCheck(req, res);
  return 'Paulo';
};

export = {
  Query: {
    me,
  },
};
