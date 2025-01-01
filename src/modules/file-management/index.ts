import { Router } from 'express';

import { FileRouter, UploadRouter } from './routes';

const router = Router();

router.use('/files', FileRouter);
router.use('/upload', UploadRouter);

export default router;
