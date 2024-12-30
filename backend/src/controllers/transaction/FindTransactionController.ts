import { Request, Response } from 'express';
import { FindTransactionService } from '../../services/transaction/FindTransactionService';

class FindTransactionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findTransactionService = new FindTransactionService();

    const transaction = await findTransactionService.execute(id);

    return response.json(transaction);
  }
}

export { FindTransactionController };