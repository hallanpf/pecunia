import { Router } from 'express';
import { CreateUserController } from '../../controllers/user/CreateUserController';

const publicUserRouter = Router();

// Create
publicUserRouter.post('/signup', new CreateUserController().handle);

export { publicUserRouter };