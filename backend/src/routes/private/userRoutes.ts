import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/auth/isAuthenticated';
import { FindAllUserController } from '../../controllers/user/FindAllUserController';
import { FindUserController } from '../../controllers/user/FindUserController';
import { EditUserController } from '../../controllers/user/EditUserController';
import { DeleteUserController } from '../../controllers/user/DeleteUserController';

const privateUserRouter = Router();

// Find by ID (Authenticated)
privateUserRouter.get('/:id', isAuthenticated, new FindUserController().handle);

// Find All (Authenticated)
privateUserRouter.get('/', isAuthenticated, new FindAllUserController().handle);

// Edit (Authenticated)
privateUserRouter.put('/update/:id', isAuthenticated, new EditUserController().handle);

// Delete (Authenticated)
privateUserRouter.delete('/users/:id', isAuthenticated, new DeleteUserController().handle);

export { privateUserRouter };