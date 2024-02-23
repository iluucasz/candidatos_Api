import { prisma } from '../database/db';
import { TApplication, TApplicationCreate } from '../schemas/application.schema';

export class ApplicationService {
   create = async (opportunityId: number, body: TApplicationCreate): Promise<TApplication> => {
      const create = await prisma.application.create({
         data: {
            opportunityId,
            ...body
         }
      });
      return create;
   };

   findMany = async (id: number): Promise<TApplication[] | null> => {
      const find = await prisma.application.findMany({
         where: {
            id
         }
      });
      return find;
   };
}
