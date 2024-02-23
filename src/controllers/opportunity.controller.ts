import { Request, Response } from 'express';
import { OpportunityServices } from '../services/opportunity.service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class OpportunityController {
   constructor (@inject('OpportunityService') private opportunityService: OpportunityServices) {}

   create = async (request: Request, response: Response) => {
      const id = response.locals.decode.id;
      const body = request.body;
      const create = await this.opportunityService.create(body, id);

      return response.status(201).json({ message: create });
   };

   findOne = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const search = await this.opportunityService.findOne(params);
      return response.status(200).json({ message: search });
   };

   findMany = async (request: Request, response: Response) => {
      const id = response.locals.decode?.id;
      const search = await this.opportunityService.findMany(id);
      return response.status(200).json({ message: search });
   };

   update = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const body = request.body;
      const update = await this.opportunityService.update(params, body);
      return response.status(201).json({ message: update });
   };

   delete = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const del = await this.opportunityService.delete(params);
      return response.status(204).json({ message: del });
   };
}
