/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import * as ClassesService from './class-items.service';
import {ClassItem} from './class-item';
import {ResponseBody} from "../common/response-body";

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

    const body: ResponseBody = {
      status: 'ok',
      message: null,
      data: classItems,
    };

    res.status(200).send(body);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


// GET classes/:id
classesRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const classItem = ClassesService.find(id);

    const body: ResponseBody = classItem ? {
      status: 'ok',
      message: null,
      data: classItem,
    } : {
      status: 'error',
      message: `Class ID '${id}' not found`,
      data: null,
    };

    return res.status(200).send(body);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST classes/:id/attend
classesRouter.post('/:id/attend', (req: Request, res: Response) => {
  const classId: number = parseInt(req.params.id);
  const studentId = req.body.studentId as string;

  try {
    const success = ClassesService.attend(classId, studentId);

    const body: ResponseBody = {
      status: success ? 'ok' : 'error',
      message: null,
      data: success,
    };

    return res.status(201).send(body);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
});