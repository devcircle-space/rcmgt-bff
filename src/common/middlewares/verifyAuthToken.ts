import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils';
import { verify } from 'jsonwebtoken';

export default async function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1]; // Bearer token
    if (!token) return next(new AppError('Unauthorized', 401));
    const isValid = verify(token, process.env.AUTH_TOKEN_SECRET as string, {
      algorithms: ['HS512'],
      complete: false,
    });
    if (!isValid) return next(new AppError('Unauthorized', 401));
    req.user = isValid as { id: string };
    next();
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}
