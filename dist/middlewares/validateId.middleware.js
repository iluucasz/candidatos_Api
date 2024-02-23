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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateId = void 0;
const db_1 = require("../database/db");
const AppError_error_1 = require("../errors/AppError.error");
class ValidateId {
}
exports.ValidateId = ValidateId;
_a = ValidateId;
ValidateId.opportunity = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(request.params.id);
    const opportunity = yield db_1.prisma.opportunity.findUnique({ where: { id } });
    if (!opportunity || !id) {
        throw new AppError_error_1.AppError(404, 'Opportunity not found');
    }
    next();
});
ValidateId.application = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(request.params.id);
    const application = yield db_1.prisma.application.findUnique({ where: { id } });
    if (!application) {
        throw new AppError_error_1.AppError(404, 'Application not found');
    }
    next();
});
