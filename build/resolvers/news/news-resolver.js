"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const apollo_server_core_1 = require("apollo-server-core");
const user_roles_1 = require("../user/user.roles");
const news_entinty_1 = require("../../entities/news-entinty");
const news_arguments_1 = require("./news-arguments");
let NewsResolver = class NewsResolver {
    async hours() {
        return await news_entinty_1.NewsModel.find({});
    }
    async hour(_id) {
        return await news_entinty_1.NewsModel.findById(_id);
    }
    async createNews(data, ctx) {
        if (!ctx.user) {
            throw new apollo_server_core_1.AuthenticationError('user_not_authenticated');
        }
        const newsData = {
            ...data,
            date: Date.now(),
            createdBy: ctx.user,
        };
        const newNews = new news_entinty_1.NewsModel(newsData);
        await newNews.save();
        return newNews;
    }
    async deleteNews(_id) {
        return await news_entinty_1.NewsModel.findByIdAndRemove(_id);
    }
    async editNews(_id, data) {
        return await news_entinty_1.NewsModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [news_entinty_1.News]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "hours", null);
__decorate([
    (0, type_graphql_1.Query)((returns) => news_entinty_1.News),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "hour", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.USER, user_roles_1.UserRoles.ADMIN, user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)((returns) => news_entinty_1.News),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_arguments_1.NewsInput, Object]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "createNews", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.USER, user_roles_1.UserRoles.ADMIN, user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)((returns) => news_entinty_1.News),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "deleteNews", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.USER, user_roles_1.UserRoles.ADMIN, user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)((returns) => news_entinty_1.News),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, news_arguments_1.EditNewsInput]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "editNews", null);
NewsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NewsResolver);
exports.NewsResolver = NewsResolver;
