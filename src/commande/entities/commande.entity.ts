import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Commande {
    @Prop()
    date: Date;
    @Prop()
    etat: string;
    @Prop()
    lieulivraison: string;
    @Prop()
    typelivraison: string;
    @Prop()
    deliveryprice: number;
}
export const commandeSchema = SchemaFactory.createForClass(Commande);