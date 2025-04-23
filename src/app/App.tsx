import styles from './App.module.css';
import { AddTodo } from '@features/todos/AddTodo';
import { TodoList } from '@features/todos/TodoList';
import { useAppSelector } from './hooks';
import { selectCompletedTodos, selectTodosInProgress } from '@features/todos/todosSlice';

export const App = () => {
  const todosInProgress = useAppSelector(selectTodosInProgress);
  const completedTodos = useAppSelector(selectCompletedTodos);
  return (
    <div className={styles.app}>
      <AddTodo />
      {todosInProgress.length > 0 && <TodoList title="Список дел" todos={todosInProgress} />}
      {completedTodos.length > 0 && <TodoList title="Завершено" todos={completedTodos} />}
    </div>
  );
};
