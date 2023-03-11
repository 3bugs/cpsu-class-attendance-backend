import {students} from '../storage';

export const findAll = () => students;

export const find = (studentId: string) => students.find(
  (student) => student.studentId === studentId
);

export const login = (studentId: string, password: string) => students.find(
  (student) => student.studentId === studentId && student.studentId === password
);