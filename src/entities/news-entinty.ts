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
export class News {
  @Field()
  readonly _id: ObjectId;

  @Prop({ required: true })
  @Field({ nullable: false })
  category: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  date: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  title: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  image: string;

  @Prop({ required: true })
  @Field({ nullable: false })
  description: string;

  @Prop({ default: [] })
  @Field((type) => [String])
  keywords?: string[];

  @Prop({ required: true })
  @Field({ nullable: false })
  createdBy: string;
}

export const NewsModel = getModelForClass(News, {
  schemaOptions: { timestamps: true },
});
