import prismaClient from "../../prisma";

// serviço calculará o saldo do usuário
// pegará o saldo total de todas as transações do usuário
// o cálculo deverá ser feito com base na receita e despesa que o usuário possui
// buscará essas informações no banco de dados na tabela de transações, baseando-se pelo tipo de transação
// apresentará o resultado de receita, despesa e saldo total

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
