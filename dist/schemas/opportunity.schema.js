"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunityUpdateSchema = exports.opportunityCreateSchema = exports.opportunitySchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.opportunitySchema = zod_1.default.object({
    id: zod_1.default.number().positive(),
    title: zod_1.default.string().min(1, 'Campo obrigatório').max(50, 'No máximo 50 caracteres'),
    description: zod_1.default.string().min(1, 'Campo obrigatório').max(250, 'No máximo 250 caracteres'),
    userId: zod_1.default.number().positive()
});
exports.opportunityCreateSchema = exports.opportunitySchema.omit({ id: true, userId: true });
exports.opportunityUpdateSchema = exports.opportunitySchema.omit({ id: true }).partial();
