import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Skill } from "../interfaces/Skill";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Abilities {
  @Field()
  readonly _id: ObjectId;

  @Prop({ default: [] })
  @Field((type) => [String])
  knowledges?: string[];

  @Prop({ default: [] })
  @Field((type) => [String])
  skills?: Skill[];
}

export const AbilitiesModel = getModelForClass(Abilities, {
  schemaOptions: { timestamps: true },
});
