import { NextFunction, Request, Response } from 'express';

const authorized = false;

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  if (authorized) {
    next();
  } else {
    throw new Error('Não autorizado');
  }
};
