import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Document {

  @Prop({ required: false })
  @Field({ nullable: true })
  cv: string;

}
