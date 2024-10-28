import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Category {
  @Prop()
  Name: string;
  @Prop()
  discription: string;
}
export const categorySchema = SchemaFactory.createForClass(Category);
