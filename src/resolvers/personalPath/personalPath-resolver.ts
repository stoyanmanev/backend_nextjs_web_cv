import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { PersonalPathModel, PersonalPath } from "../../entities/personalPath-entity";
import { PersonalPathInput, EditPersonalPathInput } from "./personalPath-arguments";


@Resolver()
export class PersonalPathResolver {
  @Query((returns) => [PersonalPath])
  async personalPaths(): Promise<PersonalPath[]> {
    return await PersonalPathModel.find({});
  }

  @Query((returns) => PersonalPath)
  async personalPath(@Arg("_id") _id: string): Promise<PersonalPath> {
    return await PersonalPathModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => PersonalPath)
  async createPersonalPath(@Arg("data") data: PersonalPathInput, @Ctx() ctx: Context): Promise<PersonalPath> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }

    const newPersonalPath = new PersonalPathModel(data);
    await newPersonalPath.save();
    return newPersonalPath;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => PersonalPath)
  async deletePersonalPath(@Arg("_id") _id: string): Promise<PersonalPath> {
    return await PersonalPathModel.findByIdAndRemove(_id);
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