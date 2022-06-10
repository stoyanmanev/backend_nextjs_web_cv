import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { Piece } from "./piece-entity";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class PersonalPath {
  @Field()
  _id: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  headline?: string;

  @Prop({ required: true })
  @Field((type) => [Piece])
  pieces: Piece[];
}

export const PersonalPathModel = getModelForClass(PersonalPath, {
  schemaOptions: { timestamps: true },
});
