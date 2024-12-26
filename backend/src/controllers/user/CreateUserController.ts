import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { UserRequest } from '../../interfaces/user/UserRequest';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { id, name, username, email, password, role }: UserRequest = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ 
      id,
      name, 
      username, 
      email, 
      password,
      role,
    });

    return response.json(user);
  }
}

export { CreateUserController };