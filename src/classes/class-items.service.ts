import {classItems} from '../storage';

export const findAll = () => classItems;

export const find = (id: number) => classItems.find(
  (classItem) => classItem.id === id
);

export const attend = (classId: number, studentId: string) => {
  const classToAttend = find(classId);

  if (classToAttend) {
    console.log(studentId);
    classToAttend.attendingStudents.push(studentId);
    return true;
  }

  return false;
};