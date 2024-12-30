import { Router, Request, Response } from 'express';
import { publicUserRouter } from './public/userRoutes';
import { publicAuthRouter } from './public/authRoutes';
import { privateUserRouter } from './private/userRoutes';
import { privateTransactionRouter } from './private/transactionRoutes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// Public Routes
router.use('/public/user', publicUserRouter);
router.use('/public/auth', publicAuthRouter);

// Private Routes
router.use('/private/user', privateUserRouter);
router.use('/private/transaction', privateTransactionRouter);

export { router };
