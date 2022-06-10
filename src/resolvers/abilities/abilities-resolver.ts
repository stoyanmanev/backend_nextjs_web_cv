import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { Abilities, AbilitiesModel } from "../../entities/abilities-entity";
import { AbilitiesInput, EditAbilitiesInput } from "./abilities-arguments";


@Resolver()
export class AbilitiesResolver {
  @Query((returns) => [Abilities])
  async abilities(): Promise<Abilities[]> {
    return await AbilitiesModel.find({});
  }

  @Query((returns) => Abilities)
  async ability(@Arg("_id") _id: string): Promise<Abilities> {
    return await AbilitiesModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Abilities)
  async createAbility(@Arg("data") data: AbilitiesInput, @Ctx() ctx: Context): Promise<Abilities> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }

    const newAbility = new AbilitiesModel(data);
    await newAbility.save();
    return newAbility;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Abilities)
  async deleteAbility(@Arg("_id") _id: string): Promise<Abilities> {
    return await AbilitiesModel.findByIdAndRemove(_id);
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