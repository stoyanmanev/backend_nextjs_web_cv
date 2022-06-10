import { MaxLength, MinLength, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Document } from "../../entities/document-entity";
import { AbilitiesInput } from "../abilities/abilities-arguments";
import { FactInput } from "../fact/fact-arguments";
import { NewsInput } from "../news/news-arguments";
import { PersonalPathInput } from "../personalPath/personalPath-arguments";
import { PortfolioInput } from "../Portfolio/portfolio-arguments";

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  fullname: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;
}

@InputType()
export class EditUserInput {
  @Field({ nullable: true })
  @MaxLength(30)
  fullname?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @MinLength(6)
  password?: string;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  age?: string;

  @Field({ nullable: true })
  img?: string;

  @Field({ nullable: true })
  googleIframe?: string;

  @Field({ nullable: true })
  form?: boolean;

  @Field({ nullable: true })
  residence?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  facebook?: string;

  @Field({ nullable: true })
  github?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  linkedin?: string;

  @Field({ nullable: true })
  cv?: string;

  // @Field((type) => [])
  // documents?: [];

  @Field((type) => [FactInput], { nullable: true })
  facts?: FactInput[];

  @Field((type) => [PersonalPathInput], { nullable: true })
  personalPath?: PersonalPathInput[];

  // @Field((type) => [AbilitiesInput], {nullable: true})
  // abilities?: AbilitiesInput[];

  // @Field((type) => [PortfolioInput], {nullable: true})
  // portfolio?: PortfolioInput[];

  @Field((type) => [NewsInput], { nullable: true })
  blog?: NewsInput[];
}
