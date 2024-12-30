import prismaClient from "../../prisma";
import { TransactionData } from "../../interfaces/transaction/TransactionTypes";

class EditTransactionService {
  async execute(id: string, data: TransactionData): Promise<TransactionData> {
    const transaction = await prismaClient.transaction.update({
      where: {
        id,
      },
      data: {
        type: data.type,
        category: data.category,
        amount: data.amount,
        createdAt: data.createdAt,
      },
    });

    return {
      id: transaction.id,
      userId: transaction.userId,
      amount: transaction.amount,
      type: transaction.type as 'income' | 'expense',
      category: transaction.category,
      createdAt: transaction.createdAt,
    };
  }
}

export { EditTransactionService };