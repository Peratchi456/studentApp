import { FETCH_STUDENTS } from '../actions/studentActions';
import { Student } from '../entity/student';

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
};

export const studentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};
