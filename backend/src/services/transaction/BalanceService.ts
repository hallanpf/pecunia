import prismaClient from "../../prisma";

class BalanceService {
  async getBalance(userId: string) {
    const transactions = await prismaClient.transaction.findMany({
      where: {
        userId
      }
    });

    const balance = transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }

      return acc;
    }, {
      income: 0,
      expense: 0
    });

    const total = balance.income - balance.expense;

    return {
      income: balance.income,
      expense: balance.expense,
      total
    };
  }
}

export { BalanceService };
