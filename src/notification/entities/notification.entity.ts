import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Notification extends Document {
    @Prop({ required: true, unique: true })
    token: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
