import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";
import { Piece, PieceModel } from "../../entities/piece-entity";
import { PieceInput } from "./piece-arguments";


@Resolver()
export class PieceResolver {
  @Query((returns) => [Piece])
  async pieces(): Promise<Piece[]> {
    return await PieceModel.find({});
  }

  @Query((returns) => Piece)
  async piece(@Arg("_id") _id: string): Promise<Piece> {
    return await PieceModel.findById(_id);
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Piece)
  async createPiece(@Arg("data") data: PieceInput, @Ctx() ctx: Context): Promise<Piece> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }

    const newPiece = new PieceModel(data);
    await newPiece.save();
    return newPiece;
  }

  @Authorized([UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Piece)
  async deletePiece(@Arg("_id") _id: string): Promise<Piece> {
    return await PieceModel.findByIdAndRemove(_id);
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