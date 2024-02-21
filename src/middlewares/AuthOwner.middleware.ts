import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class AuthOwner {
   static execute = async (request: Request, response: Response, next: NextFunction) => {
      const userId = response.locals.decode.id;
      const opportunityId = Number(request.params.id);

      const opportunity = await prisma.opportunity.findUnique({
         where: { id: opportunityId }
      });

      if (opportunity?.userId !== userId) {
         throw new AppError(401, 'You are not allowed');
      }
      next();
   };
}
