import { z } from 'zod';
import { transactionSchema } from '../../schemas/transactionSchemas';

type TransactionData = z.infer<typeof transactionSchema>;

export type { TransactionData };