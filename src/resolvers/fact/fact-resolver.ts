import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { Fact, FactModel } from "../../entities/fact-entity";
import { FactInput } from "./fact-arguments";

@Resolver()
export class FactResolver {
  @Query((returns) => [Fact])
  async facts(): Promise<Fact[]> {
    return await FactModel.find({});
  }

  @Query((returns) => Fact)
  async fact(@Arg("_id") _id: string): Promise<Fact> {
    return await FactModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Fact)
  async createFact(
    @Arg("data") data: FactInput,
    @Ctx() ctx: Context
  ): Promise<Fact> {
    if (!ctx.user) {
      throw new AuthenticationError("user_not_authenticated");
    }

    const newFact = new FactModel(data);
    await newFact.save();
    return newFact;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Fact)
  async deleteFact(@Arg("_id") _id: string): Promise<Fact> {
    return await FactModel.findByIdAndRemove(_id);
  }

  // @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  // @Mutation((returns) => News)
  // async editNews(
  //   @Arg("_id") _id: string,
  //   @Arg("data") data: EditNewsInput
  // ): Promise<News> {
  //   return await NewsModel.findByIdAndUpdate(_id, data, { new: true });
  // }
}
