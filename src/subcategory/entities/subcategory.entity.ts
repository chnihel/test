import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Subcategory {
  @Prop()
  Name: string;
  @Prop()
  Description: string;
  @Prop()
  Age: number;
}
export const subcategorySchema = SchemaFactory.createForClass(Subcategory);
