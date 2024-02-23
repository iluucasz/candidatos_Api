"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityServices = void 0;
const db_1 = require("../database/db");
class OpportunityServices {
    constructor() {
        this.create = (body, userId) => __awaiter(this, void 0, void 0, function* () {
            const opportunity = yield db_1.prisma.opportunity.create({
                data: Object.assign(Object.assign({}, body), { userId })
            });
            return opportunity;
        });
        this.findOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const opportunity = yield db_1.prisma.opportunity.findFirst({
                where: {
                    id
                }
            });
            return opportunity;
        });
        this.findMany = (userId) => __awaiter(this, void 0, void 0, function* () {
            const opportunity = yield db_1.prisma.opportunity.findMany({
                where: {
                    userId
                }
            });
            return opportunity;
        });
        this.update = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const opportunity = yield db_1.prisma.opportunity.update({
                where: {
                    id
                },
                data: body
            });
            return opportunity;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const opportunity = yield db_1.prisma.opportunity.delete({
                where: {
                    id
                }
            });
            return opportunity;
        });
    }
}
exports.OpportunityServices = OpportunityServices;
