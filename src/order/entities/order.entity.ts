import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Order {
    @Prop()
    Qnt: number;
    @Prop()
    Price: number; 
}
export const orderSchema = SchemaFactory.createForClass(Order);