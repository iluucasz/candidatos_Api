"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationRouter = void 0;
const express_1 = require("express");
const application_controller_1 = require("../controllers/application.controller");
const application_schema_1 = require("../schemas/application.schema");
const validateBody_middleware_1 = require("../middlewares/validateBody.middleware");
const validateId_middleware_1 = require("../middlewares/validateId.middleware");
const tsyringe_1 = require("tsyringe");
const application_service_1 = require("../services/application.service");
const authToken_middleware_1 = require("../middlewares/authToken.middleware");
const AuthOwner_middleware_1 = require("../middlewares/AuthOwner.middleware");
tsyringe_1.container.registerSingleton('ApplicationService', application_service_1.ApplicationService);
const applicationController = tsyringe_1.container.resolve(application_controller_1.ApplicationController);
exports.applicationRouter = (0, express_1.Router)();
exports.applicationRouter.get('/:id/applications', authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    applicationController.findMany(req, res);
});
exports.applicationRouter.post('/:id/applications', validateId_middleware_1.ValidateId.opportunity, validateBody_middleware_1.validateBody.execute(application_schema_1.applicationSchemaCreate), (req, res) => {
    applicationController.create(req, res);
});
