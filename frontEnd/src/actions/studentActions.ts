import { Student } from '../entity/student';

export const FETCH_STUDENTS = 'FETCH_STUDENTS';

export const fetchStudents = (students: Student[]) => ({
  type: FETCH_STUDENTS,
  payload: students,
});