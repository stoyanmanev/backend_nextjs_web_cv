import { buildSchema } from "type-graphql";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import * as path from "path";
import { UserResolver } from "./resolvers/user/user-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { NewsResolver } from "./resolvers/news/news-resolver";
import { authChecker } from "./resolvers/auth/auth-checker";
import { PortfolioResolver } from "./resolvers/Portfolio/portfolio-resolvers";

export const getSchema = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, AuthResolver, NewsResolver, PortfolioResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    // use document converting middleware
    globalMiddlewares: [TypegooseMiddleware],
    // use ObjectId scalar mapping
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    authChecker,
  });
  return schema;
};


/// resolvers