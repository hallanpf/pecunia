import { Request, Response } from 'express';
import { DeleteTransactionService } from '../../services/transaction/DeleteTransactionService';

class DeleteTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTransactionService = new DeleteTransactionService();
    
    await deleteTransactionService.delete(id);

    return response.status(204).send();
  }
}

export { DeleteTransactionController };