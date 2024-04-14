import { configureStore } from '@reduxjs/toolkit';
import userSlice from './resumeSlice';

export default configureStore({
  reducer: {user:userSlice}
});