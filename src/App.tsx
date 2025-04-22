// import "./App.css"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"
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
      <TodoList title="Список дел" todos={todosInProgress} />
      <TodoList title="Завершено" todos={completedTodos} />
    </div>
  );
};
