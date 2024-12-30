import { Request, Response } from 'express';
import { CreateTransactionService } from '../../services/transaction/CreateTransactionService';
import { transactionSchema } from '../../schemas/transactionSchemas';

class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { amount, category, type, userId } = transactionSchema.parse(request.body);

    const createTransactionService = new CreateTransactionService();

    const transaction = await createTransactionService.create({ amount, category, type }, userId);

    return response.json(transaction);
  }
} 

export { CreateTransactionController };