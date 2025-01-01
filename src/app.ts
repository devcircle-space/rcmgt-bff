import express from 'express';
import cors from 'cors';

import { errorHandler } from '@/common/middlewares';
import AuthRoute from '@/modules/authentication';
import ReceiptsRoute from '@/modules/receipts';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', AuthRoute);
app.use('/receipts', ReceiptsRoute);

app.use(errorHandler);

export default app;
