import { Request, Response } from 'express';
import { FindAllTransactionsService } from '../../services/transaction/FindAllTransactionsService';

class FindAllTransactionsController {
  async handle(request: Request, response: Response) {
    const { type, category } = request.query;

    const findAllTransactionsService = new FindAllTransactionsService();

    const transactions = await findAllTransactionsService.execute(type as 'income' | 'expense', category as string);

    return response.json(transactions);
  }
}

export { FindAllTransactionsController };