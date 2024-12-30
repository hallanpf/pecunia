import { z } from 'zod';

const userSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

export { userSchema };