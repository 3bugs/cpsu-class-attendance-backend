/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import * as ClassesService from './class-items.service';
import {ClassItem} from "./class-item";
import * as StudentService from "../students/students.service";
import {studentsRouter} from "../students/students.router";

/**
 * Router Definition
 */
export const classesRouter = express.Router();

/**
 * Controller Definitions
 */
// GET classes
classesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const classItems: ClassItem[] = ClassesService.findAll();

    res.status(200).send(classItems);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


// GET classes/:id
classesRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const classItem = ClassesService.find(id);

    if (classItem) {
      return res.status(200).send(classItem);
    }

    res.status(404).send(`Class ID '${id}' not found`);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST classes/:id/attend
classesRouter.post('/:id/attend', (req: Request, res: Response) => {
  const classId: number = parseInt(req.params.id);
  const studentId = req.body.studentId as string;

  try {
    ClassesService.attend(classId, studentId);

    return res.status(201).send();
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});