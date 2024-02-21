import z from 'zod';

export const opportunitySchema = z.object({
   id: z.number().positive(),
   title: z.string().min(1, 'Campo obrigatório').max(50, 'No máximo 50 caracteres'),
   description: z.string().min(1, 'Campo obrigatório').max(250, 'No máximo 250 caracteres'),
   userId: z.number().positive()
});

export const opportunityCreateSchema = opportunitySchema.omit({ id: true, userId: true });
export const opportunityUpdateSchema = opportunitySchema.omit({ id: true }).partial();

export type TOpportunityCreate = z.infer<typeof opportunityCreateSchema>;
export type TOportunityUpdate = z.infer<typeof opportunityUpdateSchema>;

export type TOportunity = z.infer<typeof opportunitySchema>;
