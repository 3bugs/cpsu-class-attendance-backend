/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import * as StudentService from './students.service';
import {Student} from './student';

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

    res.status(200).send(students);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


// GET students/:id
studentsRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const student = StudentService.find(id);

    if (student) {
      return res.status(200).send(student);
    }

    res.status(404).send(`Student ID '${id}' not found`);
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

    if (student) {
      return res.status(200).send(student);
    }

    res.status(404).send(`Invalid student ID or password`);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});