import { Module } from '@nestjs/common';
import { FatcureService } from './fatcure.service';
import { FatcureController } from './fatcure.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { factuerschema } from './entities/fatcure.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: "facture", schema: factuerschema}]) ],
  controllers: [FatcureController],
  providers: [FatcureService],
})
export class FatcureModule {}
