import { Router } from 'express';
import { OpportunityController } from '../controllers/opportunity.controller';
import { applicationRouter } from './application.route';
import { validateBody } from '../middlewares/validateBody.middleware';
import { opportunityCreateSchema } from '../schemas/opportunity.schema';
import { ValidateId } from '../middlewares/validateId.middleware';
import { container } from 'tsyringe';
import { OpportunityServices } from '../services/opportunity.service';
import { AuthToken } from '../middlewares/authToken.middleware';
import { AuthOwner } from '../middlewares/AuthOwner.middleware';

container.registerSingleton('OpportunityService', OpportunityServices);
const oportunityController = container.resolve(OpportunityController);

export const opportunityRouter = Router();

opportunityRouter.get('/user', AuthToken.execute, (req, res) => {
   oportunityController.findMany(req, res);
});
opportunityRouter.get('/', (req, res) => {
   oportunityController.findMany(req, res);
});
opportunityRouter.get('/:id', ValidateId.opportunity, AuthToken.execute, AuthOwner.execute, (req, res) => {
   oportunityController.findOne(req, res);
});
opportunityRouter.post('/', validateBody.execute(opportunityCreateSchema), AuthToken.execute, (req, res) => {
   oportunityController.create(req, res);
});
opportunityRouter.patch(
   '/:id',
   ValidateId.opportunity,
   validateBody.execute(opportunityCreateSchema),
   AuthToken.execute,
   AuthOwner.execute,
   (req, res) => {
      oportunityController.update(req, res);
   }
);
opportunityRouter.delete('/:id', ValidateId.opportunity, AuthToken.execute, AuthOwner.execute, (req, res) => {
   oportunityController.delete(req, res);
});

opportunityRouter.use('/', applicationRouter);
