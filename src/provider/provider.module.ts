import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from 'src/user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'user', schema: Userschema}])],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class ProviderModule {}
