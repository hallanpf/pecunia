import { Request, Response } from 'express';
import { EditUserService } from '../../services/user/EditUserService';
import { UserData } from '../../interfaces/user/UserTypes';

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response<UserData>> {
    const { id } = request.params;  
    const data: UserData = request.body;
    
    const editUserService = new EditUserService();
    const user = await editUserService.execute(id, data);

    return response.json(user);
  }
}

export { EditUserController };
