/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express, {Express} from 'express';
import cors from 'cors';
import helmet from 'helmet';

import {studentsRouter} from './students/students.router';
import {classesRouter} from './classes/class-items.router';
import {errorHandler} from './middleware/error.middleware';
import {notFoundHandler} from './middleware/not-found.middleware';

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/students', studentsRouter);
app.use('/api/classes', classesRouter);
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`⚡ Server is running at http://localhost:${port}`);
});