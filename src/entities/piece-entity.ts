import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Piece {

  @Prop({ required: false })
  @Field({ nullable: true })
  year?: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  location?: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  type?: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  description?: string;
}

export const PieceModel = getModelForClass(Piece, {
  schemaOptions: { timestamps: true },
});
