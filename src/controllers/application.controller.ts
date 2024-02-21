import { Request, Response } from 'express';
import { ApplicationService } from '../services/application.service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ApplicationController {
   constructor (@inject('ApplicationService') private applicationService: ApplicationService) {}

   create = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const body = request.body;

      const create = await this.applicationService.create(params, body);
      return response.status(201).json({ message: create });
   };

   findMany = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const find = await this.applicationService.findMany(params);
      return response.status(200).json({ message: find });
   };
}
