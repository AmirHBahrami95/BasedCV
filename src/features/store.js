import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from './resumeSlice';

export default configureStore({
  reducer: {resume:resumeSlice}
});