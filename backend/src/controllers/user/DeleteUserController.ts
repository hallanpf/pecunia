import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/user/DeleteUserService';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();
    
    await deleteUserService.execute(id);

    return response.status(204).send();
  }
}

export { DeleteUserController };