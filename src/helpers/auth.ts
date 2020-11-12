import { Request, Response } from 'express';

// const authorized = true;

export const authCheck = (req: Request, res: Response, next = (f?) => f) => {
  if (!req.headers.authtoken) throw new Error('Não autorizado');

  // Se houve token, faz uma validação
  const valid = req.headers.authtoken === 'secret';

  if (valid) {
    next();
  } else {
    throw new Error('Não autorizado');
  }
};
