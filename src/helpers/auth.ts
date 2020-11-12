import { Request } from 'express';
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
    console.log('Usuário corrente', currentUser);

    return currentUser;
  } catch (err) {
    console.log('Erro ao validar autorização');
    throw new Error('Token expirado ou inválido');
  }
};
