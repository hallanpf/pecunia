import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { Payload } from '../../interfaces/auth/Payload';

interface CustomRequest extends Request {
  user_id?: string;
}

export function isAuthenticated(request: CustomRequest, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: 'Token is missing',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    request.user_id = sub; // Agora TypeScript reconhece user_id

    return next();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return response.status(401).json({
      message: 'Token is invalid',
    });
  }
}