import 'express-async-errors';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import express, { json } from 'express';
import helmet from 'helmet';
import { opportunityRouter } from './routers/opportunity.route';
import { HandleErrors } from './middlewares/handleErrors.middleware';
import { userRouter } from './routers/users.route';

export const app = express();
app.use(helmet());
app.use(json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/opportunities', opportunityRouter);
app.use('/users', userRouter);
app.use(HandleErrors.execute);
