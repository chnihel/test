import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

// Importe le fichier de clé JSON que tu as téléchargé
import * as serviceAccount from '../../firstproject-6054b-firebase-adminsdk-pt3lp-05ca249266.json'; // Mets le bon chemin

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export const firebaseAdmin = admin;
