import { z } from 'zod';

const transactionSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  amount: z.number().positive(),
  type: z.enum(['income', 'expense']),
  category: z.string(),
  createdAt: z.date().optional(),
});

export { transactionSchema };