require('regenerator-runtime');
require('dotenv/config');

declare global {
  namespace Express {
    export interface Request {
      user: { id: string };
    }
  }
}

import app from './app';
import { logger, initDb } from '@/common/lib';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

const api = app.listen(PORT, async () => {
  await initDb();
  logger.info(`Server is running on port ${PORT}`);
});

export default api;
