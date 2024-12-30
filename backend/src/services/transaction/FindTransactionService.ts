import prismaClient from "../../prisma";
import { TransactionData } from "../../interfaces/transaction/TransactionTypes";

class FindTransactionService {

  async execute(id: string): Promise<TransactionData> {
    const transaction = await prismaClient.transaction.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        userId: true,
        amount: true,
        type: true,
        category: true,
        createdAt: true,
      }
    });

    return {
      ...transaction,
      type: transaction.type as 'income' | 'expense'
    }; 
  }
}

export { FindTransactionService };