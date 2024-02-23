import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class ValidateId {
   static opportunity = async (request: Request, response: Response, next: NextFunction) => {
      const id = Number(request.params.id);

      const opportunity = await prisma.opportunity.findUnique({ where: { id } });

      if (!opportunity || !id) {
         throw new AppError(404, 'Opportunity not found');
      }

      next();
   };

   static application = async (request: Request, response: Response, next: NextFunction) => {
      const id = Number(request.params.id);

      const application = await prisma.application.findUnique({ where: { id } });

      if (!application) {
         throw new AppError(404, 'Application not found');
      }

      next();
   };
}
