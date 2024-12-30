import prismaClient  from "../../prisma";
import { TransactionData } from "../../interfaces/transaction/TransactionTypes";

class FindAllTransactionsService {
  async execute(type?: 'income' | 'expense', category?: string): Promise<TransactionData[]> {
    const transactions = await prismaClient.transaction.findMany({
      where: {
        type: type ? type : undefined,
        category: category ? category : undefined,
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

    return transactions.map(transaction => ({ 
      ...transaction, 
      type: transaction.type as 'income' | 'expense'
    })); 
  }
}

export { FindAllTransactionsService };