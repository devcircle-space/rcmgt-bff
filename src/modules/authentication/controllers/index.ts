import { logger } from '@/common/lib';
import { AppError } from '@/common/utils';
import { Request, Response, NextFunction } from 'express';
import resolvers from '../resolvers';
import { ApiResponseType } from '@/common/types/ResponseType';

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const token = await resolvers.loginByEmail(req.body.email, req.body.password);
    if (token instanceof AppError) return next(token);
    res.status(200).json({ data: token, error: null, message: 'Login successful' } as ApiResponseType<string>);
    return;
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
    res
      .status(201)
      .json({ data: newUser, error: null, message: 'User created successfully' } as ApiResponseType<typeof newUser>);
    return;
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ data: null, error: null, message: 'ok' } as ApiResponseType<string>);
    return;
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

export default {
  login,
  register,
  validate,
};
