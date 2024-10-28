import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Fatcure {
    @Prop()
    Ref: string;
    @Prop()
    Remise: number;
    @Prop()
    Description: string;
}
export const factuerschema = SchemaFactory.createForClass(Fatcure);
