import { Request, Response } from 'express';
import { EditUserService } from '../../services/user/EditUserService';
import { UserRequest } from '../../interfaces/user/UserRequest';

class EditUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;  
    const { name, username, email, password, role }: UserRequest = request.body;
    
    const editUserService = new EditUserService();
    
    try {
      const user = await editUserService.execute({ 
        id, 
        name, 
        username, 
        email, 
        password,
        role,
      });
      
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { EditUserController };
