import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/user/entities/user.entity";

@Schema()
export class Customer extends User {
    items: string;
    @Prop()
    adress: string;
    @Prop()
    city: string;
    @Prop()
    cin: number;
    @Prop()
    image: string;
}
export const customerSchema = SchemaFactory.createForClass(Customer);