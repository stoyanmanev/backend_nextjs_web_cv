import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { PersonalPath } from "../../entities/personalPath-entity";
import { PieceInput } from "../piece/piece-arguments";

@InputType()
export class PersonalPathInput implements Partial<PersonalPath> {

  @Field()
  @MinLength(2)
  _id: string;

  @Field()
  @MinLength(2)
  headline?: string;

  @Field((type) => [PieceInput])
  pieces: PieceInput[];
}
