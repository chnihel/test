import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './entities/notification.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),UserModule],
  controllers: [NotificationController],
  providers: [NotificationService,],
  exports:[NotificationService]
})
export class NotificationModule {}
