import { prisma } from '../database/db';
import { TOportunity, TOportunityUpdate, TOpportunityCreate } from '../schemas/opportunity.schema';

export class OpportunityServices {
   create = async (body: TOpportunityCreate, userId: number): Promise<TOportunity> => {
      const opportunity = await prisma.opportunity.create({
         data: { ...body, userId }
      });
      return opportunity;
   };

   findOne = async (id: number): Promise<TOportunity> => {
      const opportunity = await prisma.opportunity.findFirst({
         where: {
            id
         }
      });

      return opportunity as TOportunity;
   };

   findMany = async (userId?: number): Promise<TOportunity[] | null> => {
      const opportunity = await prisma.opportunity.findMany({
         where: {
            userId
         }
      });
      return opportunity;
   };

   update = async (id: number, body: TOportunityUpdate): Promise<TOportunity> => {
      const opportunity = await prisma.opportunity.update({
         where: {
            id
         },
         data: body
      });
      return opportunity;
   };

   delete = async (id: number): Promise<TOportunity> => {
      const opportunity = await prisma.opportunity.delete({
         where: {
            id
         }
      });
      return opportunity;
   };
}
