import { logger } from '@/common/lib';
import { AppError } from '@/common/utils';
import { Request, Response, NextFunction } from 'express';
import resolvers from '../resolvers';

async function login(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const newUser = await resolvers.createUser(req.body);
    if (newUser instanceof AppError) {
      return next(newUser);
    }
    res.status(201).json(newUser);
    return;
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

export default {
  login,
  register,
};
