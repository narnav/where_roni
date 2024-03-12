import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cngColorReducer from '../features/counter/cngColorSlice';
import loginReducer from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cngColor:cngColorReducer,
    login:loginReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
