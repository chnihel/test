import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UserService } from 'src/user/user.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService,private readonly userService: UserService) {}

  // Endpoint pour recevoir le token et envoyer une notification
  @Post()
  async sendNotification(@Body() body: { token: string; userData: any }) {
    return this.notificationService.sendNotification(body.token, body.userData);
  }
  @Post('/store-admin-token')
  async storeAdminToken(@Body() body: { token: string }) {
    // Appeler le service pour stocker le token FCM de l'administrateur
    await this.userService.saveAdminToken(body.token);
  }
  
  /*@Post('register-token')
registerToken(@Body('token') token: string) {
    this.notificationService.registerToken(token);
    return { message: 'Token enregistré avec succès!' };
}*/
}
