import { Injectable } from '@nestjs/common';
import { firebaseAdmin } from './firebase-admin'; // Importe l'initialisation Firebase

@Injectable()
export class NotificationService {
  async sendNotification(token: string, userData: any) {
    const message = {
      notification: {
        title: 'Nouvel Utilisateur Ajouté',
        body: `Un nouvel utilisateur a été ajouté: ${userData.email}`,
      },
      token: token,
    };

    try {
      await firebaseAdmin.messaging().send(message);
      console.log('Notification envoyée:', message);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la notification:', error);
    }
  }
}


