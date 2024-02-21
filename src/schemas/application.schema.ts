import { z } from 'zod';

export const applicationSchema = z.object({
   id: z.number().positive(),
   name: z.string().min(1),
   email: z.string().email().min(1),
   linkedin: z.string().min(1),
   opportunityId: z.number().positive()
});

export const applicationSchemaCreate = applicationSchema.omit({ id: true, opportunityId: true });

export type TApplication = z.infer<typeof applicationSchema>;

export type TApplicationCreate = z.infer<typeof applicationSchemaCreate>;
