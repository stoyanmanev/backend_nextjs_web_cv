import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Portfolio {
  @Field()
  readonly _id: ObjectId;

  @Prop({ required: true })
  @Field({ nullable: false })
  name: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  category: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  image: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  link: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  createdBy: string;
}

export const PortfolioModel = getModelForClass(Portfolio, {
  schemaOptions: { timestamps: true },
});
