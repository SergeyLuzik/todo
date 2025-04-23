import todosReducer from '@features/todos/todosSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { todos: todosReducer }
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
