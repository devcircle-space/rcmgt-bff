import { Request, Response, NextFunction } from 'express';

import { AppError } from '@/common/utils';
import resolvers from '../resolvers';
import { ApiResponseType } from '@/common/types/ResponseType';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.user as { id: string };
    const { limit, offset } = req.query as { limit?: string; offset?: string };
    const receipts = await resolvers.getAllReceipts(id, limit ? parseInt(limit) : 10, offset ? parseInt(offset) : 0);
    res.status(200).json({ data: receipts, error: null, message: null } as ApiResponseType<typeof receipts>);
    return;
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.user as { id: string };
    const { id: receiptId } = req.params as { id: string };
    const receipt = await resolvers.getReceiptById(id, receiptId);
    res.status(200).json({ data: receipt, error: null, message: null } as ApiResponseType<typeof receipt>);
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function updateById(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

async function deleteById(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(new AppError((error as Error).message, 500));
  }
}

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
