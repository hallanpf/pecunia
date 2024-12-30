import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { UserData } from '../../interfaces/user/UserTypes';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response<UserData>> {
    const UserData: UserData = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute(UserData);

    return response.json(user);
  }
}

export { CreateUserController };