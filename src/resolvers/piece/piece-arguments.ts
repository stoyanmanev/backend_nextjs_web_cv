import { MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Piece } from "../../entities/piece-entity";


@InputType()
export class PieceInput implements Partial<Piece> {

  @Field()
  @MinLength(4)
  year?: string;

  @Field()
  @MinLength(4)
  location?: string;

  @Field()
  @MinLength(4)
  type?: string;
  
  @Field()
  @MinLength(4)
  description?: string;
}
