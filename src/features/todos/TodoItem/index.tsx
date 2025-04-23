import { useState } from 'react';
import { todoDeleted, todoStatusUpdated, type Todo } from '../todosSlice';
import styles from './styles.module.css';
import { Popup } from '../Popup';
import { useAppDispatch } from '@app/hooks';
import clsx from 'clsx';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, text, isDone } = todo;
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(todoDeleted({ id }));
    togglePopup();
  };

  const handleStatusChange = () => {
    dispatch(todoStatusUpdated({ id, isDone: !isDone }));
  };
  return (
    <>
      <li className={styles.item}>
        <label className={clsx(styles.task, isDone && styles.completedTask)}>
          {text}
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={handleStatusChange}
            checked={isDone}
          />
        </label>
        <button className={styles.remove} onClick={togglePopup}></button>
      </li>
      {showPopup && (
        <Popup todoName={text} togglePopup={togglePopup} onDeleteTodo={handleDeleteTodo} />
      )}
    </>
  );
};
