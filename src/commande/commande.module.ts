import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { commandeSchema } from './entities/commande.entity';

@Module({
  imports: [ 
    MongooseModule.forFeature([{name: 'commande', schema: commandeSchema}])
  ],
  controllers: [CommandeController],
  providers: [CommandeService],
})
export class CommandeModule {}
