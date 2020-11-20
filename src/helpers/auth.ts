import { NextFunction, Request, Response } from 'express';
import admin from 'firebase-admin';
import path from 'path';

const serviceAccount = path.resolve(__dirname, '../config/fbServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://gqlreactnode13.firebaseio.com"
});

export const authCheck = async (req: Request) => {
  try {
    const currentUser = await admin.auth().verifyIdToken(req.headers.authorization);
    // console.log('Usuário corrente', currentUser);

    return currentUser;
  } catch (err) {
    console.log('Erro ao validar autorização');
    throw new Error('Token expirado ou inválido');
  }
};

export const authCheckMiddleware = (
  req: Request, res: Response, next: NextFunction,
) => {
  if (req.headers.authorization) {
    admin.auth().verifyIdToken(req.headers.authorization)
      .then(() => {
        next();
      })
      .catch((err) => console.log(err));
  } else {
    res.json({ error: 'Não autorizado!' });
  }
};
