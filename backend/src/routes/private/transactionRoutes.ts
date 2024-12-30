import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/auth/isAuthenticated';
import { CreateTransactionController } from '../../controllers/transaction/CreateTransactionController';
import { DeleteTransactionController } from '../../controllers/transaction/DeleteTransactionController';
import { EditTransactionController } from '../../controllers/transaction/EditTransactionController';
import { FindAllTransactionsController } from '../../controllers/transaction/FindAllTransactionsController';
import { FindTransactionController } from '../../controllers/transaction/FindTransactionController';
import { BalanceController } from '../../controllers/transaction/BalanceController';

const privateTransactionRouter = Router();

// Transaction Routes
// Create (Authenticated)
privateTransactionRouter.post('/create', isAuthenticated, new CreateTransactionController().handle);

// Find by ID (Authenticated)
privateTransactionRouter.get('/find/:id', isAuthenticated, new FindTransactionController().handle);

// Find All (Authenticated)
privateTransactionRouter.get('/find', isAuthenticated, new FindAllTransactionsController().handle);

// Update (Authenticated)
privateTransactionRouter.put('/update/:id', isAuthenticated, new EditTransactionController().handle);

// Delete (Authenticated)
privateTransactionRouter.delete('/delete/:id', isAuthenticated, new DeleteTransactionController().handle);

// Balance (Authenticated)
privateTransactionRouter.get('/balance', isAuthenticated, new BalanceController().handle);

export { privateTransactionRouter };