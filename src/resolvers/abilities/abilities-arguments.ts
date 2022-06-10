import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Abilities } from "../../entities/abilities-entity";

@InputType()
export class AbilitiesInput implements Partial<Abilities> {

  @Field((type) => [String])
  knowledges?: string[];

  @Field((type) => [{ name: String, list: { type: String, value: Number } }])
  skills?: { name: string; list: { type: string; value: number } }[];
}

export class EditAbilitiesInput implements Partial<Abilities> {
  @Field((type) => [String])
  knowledges?: string[];

  @Field((type) => [{ name: String, list: { type: String, value: Number } }])
  skills?: { name: string; list: { type: string; value: number } }[];
}
