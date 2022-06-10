import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Fact } from "../../entities/fact-entity";

@InputType()
export class FactInput implements Partial<Fact> {

  @Field()
  _id: string;

  @Field()
  @MinLength(2)
  name: string;

  @Field()
  value?: number;

}