import { Router } from 'express';
import { ApplicationController } from '../controllers/application.controller';
import { applicationSchemaCreate } from '../schemas/application.schema';
import { validateBody } from '../middlewares/validateBody.middleware';
import { ValidateId } from '../middlewares/validateId.middleware';
import { container } from 'tsyringe';
import { ApplicationService } from '../services/application.service';
import { AuthToken } from '../middlewares/authToken.middleware';

container.registerSingleton('ApplicationService', ApplicationService);
const applicationController = container.resolve(ApplicationController);

export const applicationRouter = Router();

applicationRouter.get('/:id/applications', ValidateId.application, AuthToken.execute, (req, res) => {
   applicationController.findMany(req, res);
});

applicationRouter.post(
   '/:id/applications',
   ValidateId.application,
   validateBody.execute(applicationSchemaCreate),
   (req, res) => {
      applicationController.create(req, res);
   }
);
