import type { Todo } from '../../store/todosSlice';
import styles from './styles.module.css';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, text, isDone } = todo;
  return (
    <li className={styles.item}>
      <label className={styles.task}>
        {text}
        <input className={styles.checkbox} type="checkbox" defaultChecked={isDone} />
      </label>
      <button className={styles.remove}></button>
    </li>
  );
};
