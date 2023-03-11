// In-memory storage

import {Student} from './students/student';
import {ClassItem} from "./classes/class-item";

export const students: Student[] = [
  {
    studentId: '123456789',
    title: 'นาย',
    firstName: 'พร้อมเลิศ',
    lastName: 'หล่อวิจิตร',
    major: 'COMPUTER SCIENCE',
  },
  {
    studentId: '620710036',
    title: 'นางสาว',
    firstName: 'อภิญญา',
    lastName: 'รักษี',
    major: 'COMPUTER SCIENCE',
  },
  {
    studentId: '620710112',
    title: 'นางสาว',
    firstName: 'คีตยา',
    lastName: 'อุ่นโชคดี',
    major: 'COMPUTER SCIENCE',
  },
  {
    studentId: '620710131',
    title: 'นางสาว',
    firstName: 'วิโณทัย',
    lastName: 'สายยืนยง',
    major: 'COMPUTER SCIENCE',
  },
  {
    studentId: '620710132',
    title: 'นางสาว',
    firstName: 'วิภาวรรณ',
    lastName: 'บุจนะ',
    major: 'COMPUTER SCIENCE',
  },
  {
    studentId: '620710136',
    title: 'นาย',
    firstName: 'สิทธิศักดิ์',
    lastName: 'ศรีสำราญ',
    major: 'COMPUTER SCIENCE',
  },
];

export const classItems: ClassItem[] = [
  {
    id: 1,
    title: 'เรียนครั้งที่ 1 ช่วงเช้า',
    beginDate: new Date(Date.parse('2022-12-11T09:00:00+07:00')),
    endDate: new Date(Date.parse('2022-12-11T12:00:00+07:00')),
    attendingStudents: [],
  },
  {
    id: 2,
    title: 'เรียนครั้งที่ 1 ช่วงบ่าย',
    beginDate: new Date(Date.parse('2022-12-11T13:00:00+07:00')),
    endDate: new Date(Date.parse('2022-12-11T16:00:00+07:00')),
    attendingStudents: [],
  },
  {
    id: 3,
    title: 'เรียนครั้งที่ 2 ช่วงเช้า',
    beginDate: new Date(Date.parse('2022-12-18T09:00:00+07:00')),
    endDate: new Date(Date.parse('2022-12-18T12:00:00+07:00')),
    attendingStudents: [],
  },
  {
    id: 4,
    title: 'เรียนครั้งที่ 2 ช่วงบ่าย',
    beginDate: new Date(Date.parse('2022-12-18T13:00:00+07:00')),
    endDate: new Date(Date.parse('2022-12-18T16:00:00+07:00')),
    attendingStudents: [],
  },
];