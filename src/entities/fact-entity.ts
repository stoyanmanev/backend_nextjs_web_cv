import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Fact {

  @Prop({ required: true })
  @Field({ nullable: false })
  _id: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  name: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  value?: number;
}

export const FactModel = getModelForClass(Fact, {
  schemaOptions: { timestamps: true },
});
