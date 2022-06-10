import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Portfolio } from "../../entities/portfolio-entity";

@InputType()
export class PortfolioInput {

  @Field()
  name: string;

  @Field()
  category: string;

  @Field()
  link: string;
}