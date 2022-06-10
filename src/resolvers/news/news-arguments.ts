import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { News } from "../../entities/news-entinty";

@InputType()
export class NewsInput implements Partial<News> {

  @Field()
  @MinLength(2)
  category: string;

  @Field()
  @MinLength(4)
  title: string;

  @Field()
  image: string;

  @Field()
  @MinLength(10)
  description: string;

  @Field((type) => [String])
  keywords?: string[];
}

export class EditNewsInput implements Partial<News> {

  
  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => [String])
  keywords: string[];
}
