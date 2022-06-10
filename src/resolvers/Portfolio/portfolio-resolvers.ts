import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { Portfolio, PortfolioModel } from "../../entities/portfolio-entity";
import { PortfolioInput } from "./portfolio-arguments";


@Resolver()
export class PortfolioResolver {
  @Query((returns) => [Portfolio])
  async portfolios(): Promise<Portfolio[]> {
    return await PortfolioModel.find({});
  }

  @Query((returns) => Portfolio)
  async portfolio(@Arg("_id") _id: string): Promise<Portfolio> {
    return await PortfolioModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Portfolio)
  async createPortfolio(@Arg("data") data: PortfolioInput, @Ctx() ctx: Context): Promise<Portfolio> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }
    const portfolioData = {
      ...data,
      image: `${data.link}/favicon.ico`,
      createdBy: ctx.user._id
    }
    const newPortfolio = new PortfolioModel(portfolioData);
    await newPortfolio.save();
    return newPortfolio;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Portfolio)
  async deletePortfolio(@Arg("_id") _id: string): Promise<Portfolio> {
    return await PortfolioModel.findByIdAndRemove(_id);
  }
}