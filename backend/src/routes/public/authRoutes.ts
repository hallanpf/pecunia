import { Router } from 'express'; 
import { AuthController } from '../../controllers/auth/AuthController';

const publicAuthRouter = Router();

// Auth
publicAuthRouter.post('/signin', new AuthController().handle);

export { publicAuthRouter };