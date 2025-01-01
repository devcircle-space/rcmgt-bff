import { Request, Response, NextFunction } from 'express';

import { AppError } from '@/common/utils';
import { logger } from '@/common/lib';

export default async function errorHandler(err: AppError, req: Request, res: Response, next: NextFunction) {
  try {
    logger.error(err.message, err);
    res.status(err.statusCode).json({ data: null, error: err.message });
    return;
  } catch (error) {
    const { message } = error as Error;
    logger.error(message, error);
    res.status(500).json({ data: null, error: message });
    return;
  }
}
