import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { UserRoles } from "../resolvers/user/user.roles";
import { News } from "./news-entinty";
import { Fact } from "./fact-entity";
import { PersonalPath } from "./personalPath-entity";
import { Document } from "./document-entity";
import { Abilities } from "./abilities-entity";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Prop({ required: true })
  @Field()
  fullname: string;

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  password: string;

  @Prop()
  @Field({ nullable: true })
  position?: string;

  @Prop()
  @Field({ nullable: true })
  phone?: string;

  @Prop()
  @Field({ nullable: true })
  age?: string;

  @Prop()
  @Field({ nullable: true })
  img?: string;

  @Prop()
  @Field({ nullable: true })
  googleIframe?: string;

  @Prop()
  @Field({ nullable: true })
  form?: boolean;

  @Prop()
  @Field({ nullable: true })
  residence?: string;

  @Prop()
  @Field({ nullable: true })
  address?: string;

  @Prop()
  @Field({ nullable: true })
  description?: string;

  @Prop()
  @Field({ nullable: true })
  facebook?: string;

  @Prop()
  @Field({ nullable: true })
  github?: string;

  @Prop()
  @Field({ nullable: true })
  twitter?: string;

  @Prop()
  @Field({ nullable: true })
  linkedin?: string;

  // @Prop({ default: [] })
  // @Field((type) => [News], {nullable: true})
  // blog?: News[];

  @Prop({ default: [] })
  @Field((type) => [Fact], { nullable: true })
  facts?: Fact[];

  @Prop({ default: [] })
  @Field((type) => [PersonalPath], { nullable: true })
  personalPath?: PersonalPath[];

  @Prop()
  @Field({ nullable: true })
  cv?: string;

  @Prop({ default: [] })
  @Field((type) => [Abilities], { nullable: true })
  abilities?: Abilities[];

  // @Prop({ default: [] })
  // @Field((type) => [Portfolio], {nullable: true})
  // portfolio?: Portfolio[];

  @Prop({ default: [UserRoles.USER] })
  @Field((type) => [String], { nullable: true })
  roles?: string[];
  exp: number;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
