import { TodoItem } from '../TodoItem';
import styles from './styles.module.css';
import type { Todo } from '../todosSlice';

type TodoListProps = { title: string; todos: Todo[] };

export const TodoList = ({ title, todos }: TodoListProps) => {
  return (
    <div className={styles.conteiner}>
      <p className={styles.title}>
        {`${title} - `}
        <output>{todos.length}</output>
      </p>
      <ol className={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ol>
    </div>
  );
};
