"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunityRouter = void 0;
const express_1 = require("express");
const opportunity_controller_1 = require("../controllers/opportunity.controller");
const application_route_1 = require("./application.route");
const validateBody_middleware_1 = require("../middlewares/validateBody.middleware");
const opportunity_schema_1 = require("../schemas/opportunity.schema");
const validateId_middleware_1 = require("../middlewares/validateId.middleware");
const tsyringe_1 = require("tsyringe");
const opportunity_service_1 = require("../services/opportunity.service");
const authToken_middleware_1 = require("../middlewares/authToken.middleware");
const AuthOwner_middleware_1 = require("../middlewares/AuthOwner.middleware");
tsyringe_1.container.registerSingleton('OpportunityService', opportunity_service_1.OpportunityServices);
const oportunityController = tsyringe_1.container.resolve(opportunity_controller_1.OpportunityController);
exports.opportunityRouter = (0, express_1.Router)();
exports.opportunityRouter.get('/user', authToken_middleware_1.AuthToken.execute, (req, res) => {
    oportunityController.findMany(req, res);
});
exports.opportunityRouter.get('/', (req, res) => {
    oportunityController.findMany(req, res);
});
exports.opportunityRouter.get('/:id', validateId_middleware_1.ValidateId.opportunity, authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    oportunityController.findOne(req, res);
});
exports.opportunityRouter.post('/', validateBody_middleware_1.validateBody.execute(opportunity_schema_1.opportunityCreateSchema), authToken_middleware_1.AuthToken.execute, (req, res) => {
    oportunityController.create(req, res);
});
exports.opportunityRouter.patch('/:id', validateId_middleware_1.ValidateId.opportunity, validateBody_middleware_1.validateBody.execute(opportunity_schema_1.opportunityCreateSchema), authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    oportunityController.update(req, res);
});
exports.opportunityRouter.delete('/:id', validateId_middleware_1.ValidateId.opportunity, authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    oportunityController.delete(req, res);
});
exports.opportunityRouter.use('/', application_route_1.applicationRouter);
