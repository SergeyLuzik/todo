import { useState } from 'react';
import type { Todo } from '../../store/todosSlice';
import styles from './styles.module.css';
import { Popup } from '../Popup';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, text, isDone } = todo;
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = (prevState: boolean) => setShowPopup(!prevState);
  return (
    <>
      <li className={styles.item}>
        <label className={styles.task}>
          {text}
          <input className={styles.checkbox} type="checkbox" defaultChecked={isDone} />
        </label>
        <button className={styles.remove} onClick={togglePopup}></button>
      </li>
      {showPopup && <Popup todoName={text} />}
    </>
  );
};
