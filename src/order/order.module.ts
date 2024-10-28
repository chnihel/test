import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './entities/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'order', schema: orderSchema}]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
