import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { News, NewsModel } from "../../entities/news-entinty";
import { NewsInput } from "./news-arguments";


@Resolver()
export class NewsResolver {
  @Query((returns) => [News])
  async newses(): Promise<News[]> {
    return await NewsModel.find({});
  }

  @Query((returns) => News)
  async news(@Arg("_id") _id: string): Promise<News> {
    return await NewsModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => News)
  async createNews(@Arg("data") data: NewsInput, @Ctx() ctx: Context): Promise<News> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }
    const newsData = {
        ...data,
        date: Date.now(),
        createdBy: ctx.user._id,
    };

    
    const newNews = new NewsModel(newsData);
    await newNews.save();
    return newNews;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => News)
  async deleteNews(@Arg("_id") _id: string): Promise<News> {
    return await NewsModel.findByIdAndRemove(_id);
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