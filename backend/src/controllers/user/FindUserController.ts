import { Request, Response } from 'express';
import { FindUserService } from '../../services/user/FindUserService';
import { UserData } from '../../interfaces/user/UserTypes';

class FindUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUserService = new FindUserService();

    const user: UserData = await findUserService.execute(id);

    return response.json(user);
  }
}

export { FindUserController };