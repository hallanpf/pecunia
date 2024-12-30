import prismaClient from '../../prisma';
import { TransactionData } from "../../interfaces/transaction/TransactionTypes";

class CreateTransactionService {
  async create(data: TransactionData, userId: string): Promise<TransactionData> {
    const transaction = await prismaClient.transaction.create({
      data: {
        amount: data.amount,
        category: data.category,
        type: data.type,
        userId: userId
      }
    });

    return {
      id: transaction.id,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type as 'income' | 'expense',
      userId: transaction.userId
    };
   }
}

export { CreateTransactionService };