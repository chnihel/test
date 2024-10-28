import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  Ref: string;
  @Prop()
  Price: number;
  @Prop()
  Description: string;
  @Prop()
  Qnt: number;
  @Prop()
  image: string[];
}
export const ProductSchema = SchemaFactory.createForClass(Product);
