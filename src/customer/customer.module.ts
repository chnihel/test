import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'user', schema: Userschema}])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
