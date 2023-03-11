/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import * as StudentService from './students.service';
import {Student} from './student';
import {ResponseBody} from "../common/response-body";

/**
 * Router Definition
 */
export const studentsRouter = express.Router();

/**
 * Controller Definitions
 */
// GET students
studentsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const students: Student[] = StudentService.findAll();

    const body: ResponseBody = {
      status: 'ok',
      message: null,
      data: students,
    };

    res.status(200).send(body);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


// GET students/:id
studentsRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const student = StudentService.find(id);

    const body: ResponseBody = student ? {
      status: 'ok',
      message: null,
      data: student,
    } : {
      status: 'error',
      message: `Student ID '${id}' not found`,
      data: null,
    };

    return res.status(200).send(body);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET students/:id/login
studentsRouter.get('/:id/login', (req: Request, res: Response) => {
  const id: string = req.params.id;
  const password: string = req.query.password as string;

  try {
    const student = StudentService.login(id, password);

    const body: ResponseBody = student ? {
      status: 'ok',
      message: null,
      data: student,
    } : {
      status: 'error',
      message: `Invalid student ID or password`,
      data: null,
    };

    return res.status(200).send(body);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
});