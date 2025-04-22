import styles from './App.module.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useAppSelector } from './store/hooks';
import { selectCompletedTodos, selectTodosInProgress } from './store/todosSlice';

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
