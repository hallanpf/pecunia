import prismaClient from '../../prisma';


class DeleteTransactionService {
  async delete(id: string): Promise<void> {
    await prismaClient.transaction.delete({
      where: {
        id,
      },
    });
  }
}

export { DeleteTransactionService };