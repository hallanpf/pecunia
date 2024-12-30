import { z } from 'zod';
import { userSchema } from '../../schemas/userSchemas';

type UserData = z.infer<typeof userSchema>;

export type { UserData };

