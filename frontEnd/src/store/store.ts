import { configureStore } from '@reduxjs/toolkit';
import {thunk,ThunkMiddleware} from 'redux-thunk';
import { studentReducer } from '../reducer/studentReducer';


const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as unknown as ThunkMiddleware),
});

export default store;
