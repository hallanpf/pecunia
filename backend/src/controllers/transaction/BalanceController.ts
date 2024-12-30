import { Request, Response } from 'express';
import { BalanceService } from '../../services/transaction/BalanceService';

class BalanceController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const balanceService = new BalanceService();

    const balance = await balanceService.getBalance(userId);

    return response.json(balance);
  }
}

export { BalanceController };