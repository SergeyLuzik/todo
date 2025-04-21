import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    todoAdded(state, action: PayloadAction<{ text: string }>) {
      const todoText = action.payload.text;
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: todoText,
        isDone: false
      };
      state.push(newTodo);
    },
    todoDeleted(state, action: PayloadAction<{ id: string }>) {
      const todoId = action.payload.id;
      return state.filter((todo) => todo.id !== todoId);
    },
    todoStatusUpdated(state, action: PayloadAction<{ id: string; isDone: boolean }>) {
      const { id, isDone } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.isDone = isDone;
      }
    }
  },
  selectors: {
    selectTodosInProgress: (todos) => todos.filter((todo) => !todo.isDone),
    selectCompletedTodos: (todos) => todos.filter((todo) => todo.isDone)
  }
});

export const { todoAdded, todoDeleted, todoStatusUpdated } = todosSlice.actions;

export const { selectTodosInProgress, selectCompletedTodos } = todosSlice.selectors;

export default todosSlice.reducer;
