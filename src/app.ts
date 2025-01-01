import express from 'express';
import cors from 'cors';

import { errorHandler } from '@/common/middlewares';
import AuthRoute from '@/modules/authentication';
import FileRoute from '@/modules/file-management';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', AuthRoute);
app.use('/files', FileRoute);

app.use(errorHandler);

export default app;
