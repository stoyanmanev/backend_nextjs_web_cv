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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModel = exports.News = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
let News = class News {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], News.prototype, "_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], News.prototype, "keywords", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], News.prototype, "createdBy", void 0);
News = __decorate([
    (0, typegoose_1.modelOptions)({ options: { allowMixed: typegoose_1.Severity.ALLOW } }),
    (0, type_graphql_1.ObjectType)()
], News);
exports.News = News;
exports.NewsModel = (0, typegoose_1.getModelForClass)(News, {
    schemaOptions: { timestamps: true },
});
