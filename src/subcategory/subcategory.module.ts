import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { subcategorySchema } from './entities/subcategory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subcategory', schema: subcategorySchema },
    ]),
  ],
  controllers: [SubcategoryController],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
