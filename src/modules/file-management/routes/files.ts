import { Router } from 'express';
import controllers from '../controllers';
import verifyAuthToken from '@/common/middlewares/verifyAuthToken';

const router = Router();

router.get('/', verifyAuthToken, controllers.files);
router.get('/:id', verifyAuthToken, controllers.file);
router.delete('/:id', verifyAuthToken, controllers.deleteFile);

export default router;
