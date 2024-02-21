import 'express-async-errors';
import 'reflect-metadata';
import express, { json } from 'express';
import helmet from 'helmet';
import { opportunityRouter } from './routers/opportunity.route';
import { HandleErrors } from './middlewares/handleErrors.middleware';
import { userRouter } from './routers/users.route';

export const app = express();
app.use(helmet());
app.use(json());
app.use('/opportunities', opportunityRouter);
app.use('/users', userRouter);
app.use(HandleErrors.execute);
