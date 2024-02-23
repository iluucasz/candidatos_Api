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
exports.ApplicationService = void 0;
const db_1 = require("../database/db");
class ApplicationService {
    constructor() {
        this.create = (opportunityId, body) => __awaiter(this, void 0, void 0, function* () {
            const create = yield db_1.prisma.application.create({
                data: Object.assign({ opportunityId }, body)
            });
            return create;
        });
        this.findMany = (id) => __awaiter(this, void 0, void 0, function* () {
            const find = yield db_1.prisma.application.findMany({
                where: {
                    id
                }
            });
            return find;
        });
    }
}
exports.ApplicationService = ApplicationService;
