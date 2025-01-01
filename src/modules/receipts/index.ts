import { Router } from 'express';

import controllers from './controllers';
import verifyAuthToken from '@/common/middlewares/verifyAuthToken';

const router = Router();

router.get('/', verifyAuthToken, controllers.getAll);
router.get('/:id', verifyAuthToken, controllers.getById);
router.post('/', verifyAuthToken, controllers.create);
router.delete('/:id', verifyAuthToken, controllers.deleteById);

export default router;
