import { Request, Response } from 'express';

const authorized = true;

export const authCheck = (req: Request, res: Response, next = (f?) => f) => {
  if (authorized) {
    next();
  } else {
    throw new Error('Não autorizado');
  }
};
