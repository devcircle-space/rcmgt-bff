import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

router.post('/init', controllers.init);
router.post('/complete', controllers.complete);

export default router;
