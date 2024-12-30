import { Request, Response } from "express";
import { EditTransactionService } from "../../services/transaction/EditTransactionService";

class EditTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { type, category, amount, createdAt } = request.body;

    const editTransactionService = new EditTransactionService();

    const transaction = await editTransactionService.execute(id, {
      type,
      category,
      amount,
      createdAt,
    });

    return response.json(transaction);
  }
}

export { EditTransactionController };