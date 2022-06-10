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
exports.EditNewsInput = exports.NewsInput = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let NewsInput = class NewsInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], NewsInput.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], NewsInput.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], NewsInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NewsInput.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], NewsInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NewsInput.prototype, "keywords", void 0);
NewsInput = __decorate([
    (0, type_graphql_1.InputType)()
], NewsInput);
exports.NewsInput = NewsInput;
class EditNewsInput {
}
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditNewsInput.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditNewsInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditNewsInput.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditNewsInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditNewsInput.prototype, "keywords", void 0);
exports.EditNewsInput = EditNewsInput;
